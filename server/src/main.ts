import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ENV_CORS_ORIGIN, ENV_PORT } from './shared/constants/env'
import { AppError } from './shared/lib/errors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const [port, origin] = [configService.get<string>(ENV_PORT), configService.get<string>(ENV_CORS_ORIGIN)]

  if (!port) {
    throw new AppError('InvalidEnv', ENV_PORT)
  }
  if (!origin) {
    throw new AppError('InvalidEnv', ENV_CORS_ORIGIN)
  }

  app.setGlobalPrefix('api')
  app.enableCors({
    credentials: true,
    origin,
  })
  await app.listen(port!)
}
bootstrap()
