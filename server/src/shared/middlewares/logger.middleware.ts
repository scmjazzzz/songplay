import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP')

  use(request: Request, response: Response, next: NextFunction) {
    const { ip, method, originalUrl } = request

    response.on('finish', () => {
      const { statusCode } = response
      this.logger.log(`${ip} ${method} ${statusCode} ${originalUrl}`)
    })

    next()
  }
}
