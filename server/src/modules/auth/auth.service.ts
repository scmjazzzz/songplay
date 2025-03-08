import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from '@/prisma/prisma.service'
import { AppError, ExceptionError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { userSchema } from '@/shared/schemas/user.schema'
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from '@/shared/constants/token'
import {
  accessTokenPayloadSchema,
  AccessTokenPayloadSchema,
  RefreshTokenPayloadSchema,
  refreshTokenPlayloadSchema,
} from '@/shared/schemas/tokens.schema'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'
import { tokensSchema } from './schemas'

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  createToken(payload: AccessTokenPayloadSchema | RefreshTokenPayloadSchema, expiresIn: number) {
    if (payload.type === 'access_token') {
      accessTokenPayloadSchema.strict().parse(payload)
    }

    if (payload.type === 'refresh_token') {
      refreshTokenPlayloadSchema.strict().parse(payload)
    }

    return this.jwtService.sign(payload, { expiresIn })
  }

  async createTokens({ user, tx }: { user: User; tx?: Prisma.TransactionClient }) {
    const { id: userId, username } = user
    const { id: tokenId, rotationCount } = await this.authRepository.createToken(userId, tx)
    const [accessToken, refreshToken] = [
      this.createToken(
        {
          type: 'access_token',
          id: tokenId,
          userId,
          username,
        },
        ACCESS_TOKEN_EXPIRES_IN,
      ),
      this.createToken(
        {
          type: 'refresh_token',
          id: tokenId,
          rotationCount,
        },
        REFRESH_TOKEN_EXPIRES_IN,
      ),
    ]

    return tokensSchema.parse({ accessToken, refreshToken })
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
}
