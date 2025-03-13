import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Prisma, Token, User } from '@prisma/client'
import { PrismaService } from '@/prisma/prisma.service'
import { AppError, ExceptionError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { userSchema } from '@/shared/schemas/user.schema'
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from '@/shared/constants/token'
import { RefreshTokenSchema } from '@/shared/schemas/tokens.schema'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async createTokens({ user, tx, token }: { user: User; token?: Token; tx?: Prisma.TransactionClient }) {
    const { id: userId, username } = user
    const { id: tokenId, rotationCount } = token ?? (await this.authRepository.createToken(userId, tx))
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id: tokenId,
          userId,
          username,
        },
        { expiresIn: ACCESS_TOKEN_EXPIRES_IN },
      ),
      this.jwtService.signAsync(
        {
          id: tokenId,
          rotationCount,
        },
        { expiresIn: REFRESH_TOKEN_EXPIRES_IN },
      ),
    ])

    return { accessToken, refreshToken }
  }

  async register({ username, password }: RegisterDto) {
    const existsUser = await this.authRepository.existsByUsername(username)

    if (existsUser) {
      throw new ExceptionError('Conflict', 'username is already taken')
    }

    const SALT_ROUNDS = this.configService.get<string>(ENV_SALT_ROUNDS)

    if (!SALT_ROUNDS) {
      throw new AppError('InvalidEnv', ENV_SALT_ROUNDS)
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))

    return this.prismaService.$transaction(async (tx) => {
      const user = await this.authRepository.createUser({ username, password: hashedPassword, tx })
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

  async refreshToken(refreshToken?: string) {
    if (!refreshToken) {
      throw new ExceptionError('Unauthorized', 'Invalid refresh token')
    }

    const decoded = await this.jwtService.verifyAsync<RefreshTokenSchema>(refreshToken).catch(() => {
      throw new ExceptionError('Unauthorized', 'Invalid refresh token')
    })

    const token = await this.authRepository.getToken(decoded.id)

    if (!token) {
      throw new ExceptionError('Unauthorized', 'Invalid authentication credentials')
    }

    if (token.blocked) {
      throw new ExceptionError('Unauthorized', 'Token is blocked')
    }

    if (token.rotationCount !== decoded.rotationCount) {
      await this.authRepository.updateToken({ id: decoded.id, blocked: true })
      throw new ExceptionError('Unauthorized', 'Rotation count does not match')
    }

    return this.prismaService.$transaction(async (tx) => {
      const updatedToken = await this.authRepository.updateToken({
        id: decoded.id,
        rotationCount: token.rotationCount + 1,
        tx,
      })
      const tokens = await this.createTokens({ user: updatedToken.user, token: updatedToken, tx })

      return tokens
    })
  }
}
