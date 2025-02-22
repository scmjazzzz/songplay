import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { Prisma, Token } from '@prisma/client'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'
import * as bcrypt from 'bcrypt'
import { TransactionService } from '@/shared/modules/transaction.service'
import { userSchema, UserSchema } from '@/shared/schemas/user.schema'
import { AppError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { refreshTokenSchema, RefreshTokenSchema, tokensSchema } from './schemas'

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly transactionService: TransactionService,
  ) {}

  async createTokenItem(userId: number, tx?: Prisma.TransactionClient) {
    return this.authRepository.createToken(userId, tx)
  }

  async createTokens({ user, token, tx }: { user: UserSchema; token?: Token; tx?: Prisma.TransactionClient }) {
    const { id: userId, username } = user
    const { id: tokenId, rotationCount } = token ?? (await this.createTokenItem(user.id, tx))
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(
        {
          id: tokenId,
          username,
          userId,
        },
        {
          expiresIn: '1h',
        },
      ),
      this.jwtService.sign(
        {
          id: tokenId,
          rotationCount,
        },
        {
          expiresIn: '30d',
        },
      ),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }

  async register({ username, password }: RegisterDto) {
    const existsUser = await this.authRepository.existsByUsername(username)

    if (existsUser) {
      throw new AppError('Conflict', 'username is already taken')
    }

    const SALT_ROUNDS = this.configService.get<string>(ENV_SALT_ROUNDS)

    if (!SALT_ROUNDS) {
      throw new AppError('InternalServerError', 'Invalid SALT_ROUNDS')
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))

    return this.transactionService.transaction(async (tx) => {
      const user = await this.authRepository.createUser({ username, password: hashedPassword }, tx)
      const tokens = await this.createTokens({ user, tx })

      return {
        user: userSchema.parse(user),
        tokens: tokensSchema.parse(tokens),
      }
    })
  }

  async login({ username, password }: LoginDto) {
    const user = await this.authRepository.existsByUsername(username)

    if (!user) {
      throw new AppError('Unauthorized', 'Invalid username or password')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new AppError('Unauthorized', 'Invalid username or password')
    }

    const tokens = await this.createTokens({ user })

    return {
      user: userSchema.parse(user),
      tokens: tokensSchema.parse(tokens),
    }
  }

  verifyRefreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify<RefreshTokenSchema>(refreshToken)
      const { success, data } = refreshTokenSchema.strict().safeParse(decoded)

      if (!success) {
        throw new AppError('Unauthorized', 'Invalid token structure')
      }

      return data
    } catch (error) {
      if (error instanceof AppError) {
        throw error
      }

      throw new AppError('Unauthorized', 'Invalid or expired token')
    }
  }

  async refreshToken(refreshToken?: string) {
    if (!refreshToken) {
      throw new AppError('BadRequest', 'Refresh token is required')
    }

    const { id, rotationCount } = this.verifyRefreshToken(refreshToken)
    const token = await this.authRepository.getToken(id)

    if (!token) {
      throw new AppError('NotFound', 'Refresh token not found')
    }

    if (token.blocked) {
      throw new AppError('Forbidden', 'Token is blocked')
    }

    if (token.rotationCount !== rotationCount) {
      await this.authRepository.updateToken(id, { blocked: true })
      throw new AppError('Forbidden', 'Rotation counter does not match')
    }

    return this.transactionService.transaction(async (tx) => {
      const updatedToken = await this.authRepository.updateToken(id, { rotationCount: token.rotationCount + 1, tx })
      const tokens = await this.createTokens({ user: updatedToken.user, token: updatedToken, tx })

      return tokensSchema.parse(tokens)
    })
  }
}
