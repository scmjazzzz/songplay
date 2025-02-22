import { Controller, Get, Res, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'
import { User } from '@/shared/decorators/user.decorator'
import { UserDto } from '@/shared/dtos/user.dto'
import { Response } from 'express'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@User() user: UserDto | null, @Res() response: Response) {
    return response.json(user)
  }
}
