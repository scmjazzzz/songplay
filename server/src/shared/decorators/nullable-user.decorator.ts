import { Request } from 'express'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const NullableUser = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest() as Request
  return request.user
})
