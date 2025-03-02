import { Response } from 'express'
import { Controller, Delete, Get, HttpCode, Post, Res, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '@/shared/guards/auth.guard'
import { UserDto } from '@/shared/dtos/user.dto'
import { NullableUser, RequiredUser } from '@/shared/decorators'
import { clearTokenCookie } from '@/shared/lib/cookies/tokens'

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
  @UseGuards(AuthGuard)
  async logout(@Res() response: Response) {
    clearTokenCookie(response)
    return response.send()
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
