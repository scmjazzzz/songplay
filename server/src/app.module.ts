import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { JwtModule } from '@nestjs/jwt'
import { ENV_JWT_SECRET_KEY } from './shared/constants/env'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env[ENV_JWT_SECRET_KEY],
      global: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
