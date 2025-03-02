import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppModule } from './app.module'
import { findInvalidEnvs } from './shared/utils'
import { ENV_CORS_ORIGIN, ENV_PORT } from './shared/constants/env'
import { AppError } from './shared/lib/errors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const [port, origin] = [configService.get<string>(ENV_PORT), configService.get<string>(ENV_CORS_ORIGIN)]

  if (!port || !origin) {
    throw new AppError('InvalidEnv', findInvalidEnvs({ [ENV_PORT]: port, [ENV_CORS_ORIGIN]: origin }))
  }

  app.useGlobalPipes(new ZodValidationPipe())
  app.setGlobalPrefix('api')
  app.enableCors({
    credentials: true,
    origin,
  })

  await app.listen(port)
}
bootstrap()
