import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async deleteUser(userId: number) {
    await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    })
  }
}
