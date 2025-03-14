import { Response } from 'express'
import { Body, Controller, Delete, Get, HttpCode, Patch, Post, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@/shared/guards/auth.guard'
import { User } from '@/shared/decorators/user.decorator'
import { UserDto } from '@/shared/dtos/user.dto'
import { clearTokenCookie } from '@/shared/lib/cookies'
import { UserService } from './user.service'
import { ChangePasswordDto } from './dtos'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@User() user: UserDto) {
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
  async changePassword(@User() user: UserDto, @Body() { currentPassword, changePassword }: ChangePasswordDto) {
    await this.userService.changePassword({ currentPassword, changePassword, userId: user.id })
  }

  @Delete('unregister')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  async unregister(@User() user: UserDto, @Res() response: Response) {
    await this.userService.unregister(user.id)
    clearTokenCookie(response)

    return response.send()
  }
}
