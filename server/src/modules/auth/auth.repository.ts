import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@/prisma/prisma.service'
import { RegisterDto } from './dtos'

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createToken(userId: number, tx?: Prisma.TransactionClient) {
    const token = await this.prismaService.getClient(tx).token.create({
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

  async createUser({ username, password, tx }: RegisterDto & { tx?: Prisma.TransactionClient }) {
    const user = await this.prismaService.getClient(tx).user.create({
      data: {
        username,
        password,
      },
    })

    return user
  }
}
