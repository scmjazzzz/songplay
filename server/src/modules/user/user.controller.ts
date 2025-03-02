import { Controller, Get, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '@/shared/guards/auth.guard'
import { UserDto } from '@/shared/dtos/user.dto'
import { NullableUser } from '@/shared/decorators'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@NullableUser() user: UserDto | null) {
    return user
  }
}
