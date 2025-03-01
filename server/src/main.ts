import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ENV_CORS_ORIGIN, ENV_PORT } from './shared/constants/env'
import { ConfigService } from '@nestjs/config'
import { AppError } from './shared/lib/errors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get<string>(ENV_PORT)
  const origin = configService.get<string>(ENV_CORS_ORIGIN)

  if (!port || !origin) {
    throw new AppError('MissingEnv', ['PORT', 'CORS_ORIGIN'])
  }

  app.setGlobalPrefix('api')
  app.enableCors({
    credentials: true,
    origin,
  })

  await app.listen(port)
}
bootstrap()
