import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { Response } from 'express'
import { ZodValidationException } from 'nestjs-zod'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    const error = exception.getResponse() as {
      error: string
      statusCode: number
      message: string | string[]
    }

    const errorName = exception instanceof ZodValidationException ? 'BadRequest' : error.error

    response.status(error.statusCode).json({
      name: errorName,
      statusCode: error.statusCode,
      message: error.message,
    })
  }
}
