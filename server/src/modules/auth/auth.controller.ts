import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dtos'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() { username, password }: RegisterDto) {
    return this.authService.register({ username, password })
  }

  @Post('login')
  async login(@Body() { username, password }: LoginDto) {
    return this.authService.login({ username, password })
  }
}
