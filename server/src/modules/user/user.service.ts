import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async unregister(userId: number) {
    await this.userRepository.deleteUser(userId)
  }
}
