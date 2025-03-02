import * as bcrypt from 'bcrypt'
import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Prisma, Token, User } from '@prisma/client'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'
import { tokensSchema } from './schemas'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { AppError, ExceptionError } from '@/shared/lib/errors'
import { userSchema } from '@/shared/schemas/user.schema'
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from '@/shared/constants/tokens'
import { refreshTokenSchema, RefreshTokenSchema } from '@/shared/schemas/tokens.schema'

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async createTokenItem(userId: number, tx?: Prisma.TransactionClient) {
    return this.authRepository.createToken(userId, tx)
  }

  async createTokens({ user, tokenItem, tx }: { user: User; tokenItem?: Token; tx?: Prisma.TransactionClient }) {
    const { id: userId, username } = user
    const { id: tokenId, rotationCount } = tokenItem ?? (await this.createTokenItem(userId, tx))
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(
        {
          id: tokenId,
          username,
          userId,
        },
        {
          expiresIn: ACCESS_TOKEN_EXPIRES_IN,
        },
      ),
      this.jwtService.sign(
        {
          id: tokenId,
          rotationCount,
        },
        {
          expiresIn: REFRESH_TOKEN_EXPIRES_IN,
        },
      ),
    ])

    return tokensSchema.parse({ accessToken, refreshToken })
  }

  async register({ username, password }: RegisterDto) {
    const existsUser = await this.authRepository.existsByUsername(username)

    if (existsUser) {
      throw new ExceptionError('Conflict', 'username is already taken')
    }

    const SALT_ROUNDS = this.configService.get<string>(ENV_SALT_ROUNDS)

    if (!SALT_ROUNDS) {
      throw new AppError('InvalidEnv', [ENV_SALT_ROUNDS])
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))

    return this.prismaService.$transaction(async (tx) => {
      const user = await this.authRepository.createUser({ username, password: hashedPassword }, tx)
      const tokens = await this.createTokens({ user, tx })

      return {
        user: userSchema.parse(user),
        tokens,
      }
    })
  }

  async login({ username, password }: LoginDto) {
    const user = await this.authRepository.existsByUsername(username)

    if (!user) {
      throw new ExceptionError('Unauthorized', 'Invalid username or password')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new ExceptionError('Unauthorized', 'Invalid username or password')
    }

    const tokens = await this.createTokens({ user })

    return {
      user: userSchema.parse(user),
      tokens,
    }
  }

  verifyRefreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify<RefreshTokenSchema>(refreshToken)
      const { success, data } = refreshTokenSchema.strict().safeParse(decoded)

      if (!success) {
        throw new ExceptionError('Unauthorized', 'Invalid token structure')
      }

      return data
    } catch (error) {
      if (error instanceof ExceptionError) {
        throw error
      }

      throw new ExceptionError('Unauthorized', 'Invalid or expired token')
    }
  }

  async refreshToken(refreshToken?: string) {
    if (!refreshToken) {
      throw new ExceptionError('BadRequest', 'Refresh token is required')
    }

    const { id, rotationCount } = this.verifyRefreshToken(refreshToken)
    const token = await this.authRepository.getToken(id)

    if (!token) {
      throw new ExceptionError('NotFound', 'Refresh token not found')
    }

    if (token.blocked) {
      throw new ExceptionError('Forbidden', 'Token is blocked')
    }

    if (token.rotationCount !== rotationCount) {
      await this.authRepository.updateToken(id, { blocked: true })
      throw new ExceptionError('Forbidden', 'Rotation counter does not match')
    }

    return this.prismaService.$transaction(async (tx) => {
      const updatedToken = await this.authRepository.updateToken(id, { rotationCount: token.rotationCount + 1, tx })
      const tokens = await this.createTokens({ user: updatedToken.user, tokenItem: updatedToken, tx })

      return tokens
    })
  }
}
