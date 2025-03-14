import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AppError, ExceptionError } from '@/shared/lib/errors'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'
import { UserRepository } from './user.repository'
import { ChangePasswordDto } from './dtos'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  private async getUser(userId: number) {
    const user = await this.userRepository.existsByUserId(userId)

    if (!user) {
      throw new ExceptionError('NotFound', 'User not found')
    }

    return user
  }

  async unregister(userId: number) {
    const user = await this.getUser(userId)
    await this.userRepository.deleteUser(user.id)
  }

  async changePassword({ currentPassword, changePassword, userId }: ChangePasswordDto & { userId: number }) {
    const user = await this.getUser(userId)
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)

    if (!isPasswordValid) {
      throw new ExceptionError('Forbidden', 'Password does not match')
    }

    const SALT_ROUNDS = this.configService.get<string>(ENV_SALT_ROUNDS)

    if (!SALT_ROUNDS) {
      throw new AppError('InvalidEnv', ENV_SALT_ROUNDS)
    }

    const hashedPassword = await bcrypt.hash(changePassword, parseInt(SALT_ROUNDS))

    await this.userRepository.updatedPassword(userId, hashedPassword)
  }
}
