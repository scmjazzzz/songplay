import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { ENV_JWT_SECRET_KEY } from './shared/constants/env'

import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from './modules/user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { TransactionModule } from './shared/modules/transaction.module'
import { NullTo204Interceptor } from './shared/interceptors/null-to-204.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env[ENV_JWT_SECRET_KEY],
      global: true,
    }),
    PrismaModule,
    TransactionModule,
    AuthModule,
    UserModule,
  ],
  providers: [
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    {
      provide: APP_INTERCEPTOR,
      useClass: NullTo204Interceptor,
    },
  ],
})
export class AppModule {}
