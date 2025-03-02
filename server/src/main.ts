import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ENV_CORS_ORIGIN, ENV_PORT } from './shared/constants/env'
import { ConfigService } from '@nestjs/config'
import { AppError } from './shared/lib/errors'
import { findMissingEnvs } from './shared/utils'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const [port, origin] = [configService.get<string>(ENV_PORT), configService.get<string>(ENV_CORS_ORIGIN)]

  if (!port || !origin) {
    throw new AppError('MissingEnv', findMissingEnvs({ [ENV_PORT]: port, [ENV_CORS_ORIGIN]: origin }))
  }

  app.setGlobalPrefix('api')
  app.enableCors({
    credentials: true,
    origin,
  })

  await app.listen(port)
}
bootstrap()
