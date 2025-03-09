import { Request, Response } from 'express'
import { Body, Controller, HttpCode, Post, Req, Res } from '@nestjs/common'
import { setTokenCookie } from '@/shared/lib/cookies'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dtos'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() { username, password }: RegisterDto, @Res() response: Response) {
    const { user, tokens } = await this.authService.register({ username, password })

    setTokenCookie(response, tokens)
    return response.json(user)
  }

  @Post('login')
  async login(@Body() { username, password }: LoginDto, @Res() response: Response) {
    const { user, tokens } = await this.authService.login({ username, password })

    setTokenCookie(response, tokens)
    return response.json(user)
  }

  @Post('refresh')
  @HttpCode(204)
  async refresh(@Req() request: Request, @Res() response: Response) {
    const refreshToken = (request.cookies['refresh_token'] as string) ?? ''
    const tokens = await this.authService.refreshToken(refreshToken)

    setTokenCookie(response, tokens)
    return response.send()
  }
}
