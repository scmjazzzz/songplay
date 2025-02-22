import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { ChangePasswordDto } from './dtos'
import { AppError } from '@/shared/lib/errors'
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'
import { ENV_SALT_ROUNDS } from '@/shared/constants/env'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  async changePassword({ currentPassword, changePassword, userId }: ChangePasswordDto & { userId: number }) {
    const user = await this.userRepository.existsByUserId(userId)

    if (!user) {
      throw new AppError('NotFound', 'User not found')
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)

    if (!isPasswordValid) {
      throw new AppError('Forbidden', 'Password does not match')
    }

    const SALT_ROUNDS = this.configService.get<string>(ENV_SALT_ROUNDS)

    if (!SALT_ROUNDS) {
      throw new AppError('InternalServerError', 'Invalid SALT_ROUNDS')
    }

    const hashedPassword = await bcrypt.hash(changePassword, parseInt(SALT_ROUNDS))

    await this.userRepository.updatedPassword(userId, hashedPassword)
  }
}
