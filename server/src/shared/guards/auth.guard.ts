import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ExceptionError } from '../lib/errors'
import { accessTokenSchema, AccessTokenSchema } from '../schemas/tokens.schema'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  verifyToken(accessToken: string) {
    try {
      const decoded = this.jwtService.verify<AccessTokenSchema>(accessToken)
      const { success, data } = accessTokenSchema.strict().safeParse(decoded)

      if (!success) {
        throw new ExceptionError('Unauthorized', 'Invalid token structure')
      }

      return data
    } catch (error) {
      if (error instanceof ExceptionError) {
        throw error
      }

      throw new ExceptionError('Unauthorized', 'Invalid or expired token')
    }
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request
    const accessToken = request.cookies['access_token']

    if (!accessToken) {
      request.user = null
      return true
    }

    const decoded = this.verifyToken(accessToken)

    request.user = {
      id: decoded.userId,
      username: decoded.username,
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
