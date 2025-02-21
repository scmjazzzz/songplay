import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { InternalServerErrorException } from '@nestjs/common'
import { ENV_PORT } from './shared/constants/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env[ENV_PORT]

  if (!PORT) {
    throw new InternalServerErrorException('PORT environment variable is missing or invalid')
  }

  app.setGlobalPrefix('api')
  await app.listen(PORT)
}
bootstrap()
