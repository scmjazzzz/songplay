import { Response } from 'express'
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { ZodValidationException } from 'nestjs-zod'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    const errorException = exception.getResponse() as {
      statusCode: number
      message: string
      error?: string
      errors?: Record<string, any>[]
      type?: string
    }

    const errorName = exception instanceof ZodValidationException ? 'BadRequest' : errorException.error

    response.status(errorException.statusCode).json({
      name: errorName,
      statusCode: errorException.statusCode,
      message: errorException.message,
      ...(errorException.type && {
        type: errorException.type,
      }),
    })
  }
}
