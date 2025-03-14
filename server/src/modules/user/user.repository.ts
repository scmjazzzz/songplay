import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async existsByUserId(userId: number) {
    return this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    })
  }

  async deleteUser(userId: number) {
    await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    })
  }

  async updatedPassword(userId: number, changePassword: string) {
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        password: changePassword,
      },
    })
  }
}
