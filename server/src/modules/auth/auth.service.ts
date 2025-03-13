import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AppError, ExceptionError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { AuthRepository } from './auth.repository'
import { LoginDto, RegisterDto } from './dtos'
import { userSchema } from '@/shared/schemas/user.schema'

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly configService: ConfigService,
  ) {}

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

    const user = await this.authRepository.createUser({ username, password: hashedPassword })

    return userSchema.parse(user)
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

    return userSchema.parse(user)
  }
}
