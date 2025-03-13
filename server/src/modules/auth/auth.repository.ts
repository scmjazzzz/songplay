import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { RegisterDto } from './dtos'

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createToken(userId: number) {
    const token = await this.prismaService.token.create({
      data: {
        userId,
      },
    })

    return token
  }

  async existsByUsername(username: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        username,
      },
    })

    return user
  }

  async createUser({ username, password }: RegisterDto) {
    const user = await this.prismaService.user.create({
      data: {
        username,
        password,
      },
    })

    return user
  }
}
