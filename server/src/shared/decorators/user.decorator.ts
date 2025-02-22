import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { AppError } from '../lib/errors'

export const User = createParamDecorator((mode: 'required' | 'optional' = 'required', ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest() as Request

  if (mode === 'required' && !request.user) {
    throw new AppError('Unauthorized', 'User is not authenticated')
  }

  return request.user
})
