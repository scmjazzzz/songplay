import { Response } from 'express'
import { Body, Controller, Post, Res } from '@nestjs/common'
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
}
