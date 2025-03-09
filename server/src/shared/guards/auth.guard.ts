import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { AccessTokenSchema } from '../schemas/tokens.schema'
import { ExceptionError } from '../lib/errors'

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
      throw new ExceptionError('Unauthorized', 'Invalid token')
    }

    try {
      const decoded = await this.jwtService.verifyAsync<AccessTokenSchema>(accessToken)
      request.user = {
        id: decoded.userId,
        username: decoded.username,
      }
    } catch (error) {
      throw new ExceptionError('Unauthorized', 'Invalid token')
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
