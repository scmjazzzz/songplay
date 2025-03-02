import { Controller, Get, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '@/shared/guards/auth.guard'
import { User } from '@/shared/decorators/user.decorator'
import { UserDto } from '@/shared/dtos/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@User() user: UserDto | null) {
    return user
  }
}
