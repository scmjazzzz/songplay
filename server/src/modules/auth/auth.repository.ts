import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { RegisterDto } from './dtos'
import { Prisma, Token } from '@prisma/client'

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

  async createUser({ username, password }: RegisterDto, tx?: Prisma.TransactionClient) {
    const user = await this.prismaService.getClient(tx).user.create({
      data: {
        username,
        password,
      },
    })

    return user
  }

  async getToken(tokenId: number) {
    const token = await this.prismaService.token.findUnique({
      where: {
        id: tokenId,
      },
    })

    return token
  }

  async updateToken(
    tokenId: number,
    {
      blocked,
      rotationCount,
      tx,
    }: Pick<Partial<Token>, 'blocked' | 'rotationCount'> & { tx?: Prisma.TransactionClient },
  ) {
    const token = this.prismaService.getClient(tx).token.update({
      where: {
        id: tokenId,
      },
      data: {
        blocked,
        rotationCount,
      },
      include: {
        user: true,
      },
    })

    return token
  }
}
