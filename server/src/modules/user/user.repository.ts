import { PrismaService } from 'src/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
