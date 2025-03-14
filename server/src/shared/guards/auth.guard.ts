import { Request } from 'express'
import { JsonWebTokenError, JwtService } from '@nestjs/jwt'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ExceptionError } from '../lib/errors'
import { AccessTokenSchema } from '../schemas/tokens.schema'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  private extractAccessToken(request: Request) {
    const token = (request.cookies['access_token'] || request.headers.authorization?.split('Bearer ')[1]) as
      | string
      | undefined
    return token
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request
    const accessToken = this.extractAccessToken(request)

    if (!accessToken) {
      throw new ExceptionError('Unauthorized', 'Invalid access token')
    }

    try {
      const decoded = await this.jwtService.verifyAsync<AccessTokenSchema>(accessToken)
      request.user = {
        id: decoded.userId,
        username: decoded.username,
      }
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        if (error.name === 'TokenExpiredError') {
          throw new ExceptionError('Unauthorized', 'Access token expired', 'TokenExpiredError')
        }
      }

      throw new ExceptionError('Unauthorized', 'Invalid access token')
    }

    return true
  }
}

declare module 'express' {
  interface Request {
    user: {
      id: number
      username: string
    } | null
  }
}
