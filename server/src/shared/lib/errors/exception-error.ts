import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

const exceptionErrors = {
  BadRequest: {
    error: BadRequestException,
  },
  Unauthorized: {
    error: UnauthorizedException,
  },
  NotFound: {
    error: NotFoundException,
  },
  Forbidden: {
    error: ForbiddenException,
  },
  Conflict: {
    error: ConflictException,
  },
  InternalServerError: {
    error: InternalServerErrorException,
  },
} as const

export class ExceptionError extends HttpException {
  constructor(name: keyof typeof exceptionErrors, message: string, type?: string) {
    const { error: ErrorClass } = exceptionErrors[name]
    const error = new ErrorClass(message)

    const originalResponse = error.getResponse()

    const response =
      typeof originalResponse === 'object' ? { ...originalResponse, type } : { message: originalResponse, type }

    super(response, error.getStatus())
  }
}
