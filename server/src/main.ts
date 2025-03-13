import * as cookieParser from 'cookie-parser'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppModule } from './app.module'
import { ENV_CORS_ORIGIN, ENV_PORT } from './shared/constants/env'
import { HttpExceptionFilter } from './shared/filters/http-exception.filter'
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

  app.use(cookieParser())
  app.useGlobalPipes(new ZodValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.setGlobalPrefix('api')
  app.enableCors({
    credentials: true,
    origin,
  })
  await app.listen(port!)
}
bootstrap()
