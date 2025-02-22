import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { accessTokenSchema, AccessTokenSchema } from './schemas'
import { AppError } from '@/shared/lib/errors'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  verifyToken(accessToken: string) {
    try {
      const decoded = this.jwtService.verify<AccessTokenSchema>(accessToken)
      const { success, data } = accessTokenSchema.strict().safeParse(decoded)

      if (!success) {
        throw new AppError('Unauthorized', 'Invalid token structure')
      }

      return data
    } catch (error) {
      if (error instanceof AppError) {
        throw error
      }

      throw new AppError('Unauthorized', 'Invalid or expired token')
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
