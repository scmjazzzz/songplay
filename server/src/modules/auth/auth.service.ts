import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'
import * as bcrypt from 'bcrypt'
import { TransactionService } from '@/shared/modules/transaction.service'
import { userSchema, UserSchema } from '@/shared/schemas/user.schema'
import { AppError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'

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

  async createTokens(user: UserSchema, tx?: Prisma.TransactionClient) {
    const { id: tokenId, rotationCount } = await this.createTokenItem(user.id, tx)
    const { id: userId, username } = user
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
      throw new InternalServerErrorException('Invalid SALT_ROUNDS')
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS))

    return this.transactionService.transaction(async (tx) => {
      const user = await this.authRepository.createUser({ username, password: hashedPassword }, tx)
      const tokens = await this.createTokens(user, tx)

      return {
        user: userSchema.parse(user),
        tokens,
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

    const tokens = await this.createTokens(user)

    return {
      user: userSchema.parse(user),
      tokens,
    }
  }
}
