import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { ExceptionError } from '@/shared/lib/errors'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async unregister(userId: number) {
    const user = await this.userRepository.existsByUserId(userId)

    if (!user) {
      throw new ExceptionError('NotFound', 'User not found')
    }

    await this.userRepository.deleteUser(userId)
  }
}
