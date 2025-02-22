import { PrismaService } from 'src/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

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

  async existsByUserId(userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    })

    return user
  }
}
