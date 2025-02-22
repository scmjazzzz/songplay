import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { JwtModule } from '@nestjs/jwt'
import { ENV_JWT_SECRET_KEY } from '@/shared/constants/env'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env[ENV_JWT_SECRET_KEY],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
