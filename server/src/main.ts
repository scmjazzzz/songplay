import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ENV_PORT } from './shared/constants/env'
import { AppError } from './shared/lib/errors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env[ENV_PORT]

  if (!PORT) {
    throw new AppError('InternalServerError', 'Invalid PORT')
  }

  app.setGlobalPrefix('api')
  await app.listen(PORT)
}
bootstrap()
