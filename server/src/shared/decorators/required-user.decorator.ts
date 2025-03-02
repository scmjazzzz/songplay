import { Request } from 'express'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { ExceptionError } from '../lib/errors'

export const RequiredUser = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest() as Request

  if (!request.user) {
    throw new ExceptionError('Unauthorized', 'User is not authenticated')
  }

  return request.user
})
