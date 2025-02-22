import { Body, Controller, Get, HttpCode, Patch, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'
import { User } from '@/shared/decorators/user.decorator'
import { UserDto } from '@/shared/dtos/user.dto'
import { ChangePasswordDto } from './dtos'
import { userResponseSchema } from '@/shared/schemas/user.schema'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@User('optional') user: UserDto | null) {
    return user ? userResponseSchema.parse({ user }) : { user: null }
  }

  @Patch('change-password')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  async changePassword(@User() user: UserDto, @Body() { currentPassword, changePassword }: ChangePasswordDto) {
    await this.userService.changePassword({ currentPassword, changePassword, userId: user.id })
  }
}
