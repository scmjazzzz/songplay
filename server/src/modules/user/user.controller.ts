import { Response } from 'express'
import { Body, Controller, Delete, Get, HttpCode, Patch, Post, Res, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '@/shared/guards/auth.guard'
import { UserDto } from '@/shared/dtos/user.dto'
import { NullableUser, RequiredUser } from '@/shared/decorators'
import { clearTokenCookie } from '@/shared/lib/cookies/tokens'
import { ChangePasswordDto } from './dtos'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@NullableUser() user: UserDto | null) {
    return user
  }

  @Post('logout')
  @HttpCode(204)
  async logout(@Res() response: Response) {
    clearTokenCookie(response)
    return response.send()
  }

  @Patch('change-password')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  async changePassword(@RequiredUser() user: UserDto, @Body() { currentPassword, changePassword }: ChangePasswordDto) {
    await this.userService.changePassword({ currentPassword, changePassword, userId: user.id })
  }

  @Delete('unregister')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  async unregister(@RequiredUser() user: UserDto, @Res() response: Response) {
    await this.userService.unregister(user.id)
    clearTokenCookie(response)

    return response.send()
  }
}
