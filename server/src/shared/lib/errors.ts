import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

const errors = {
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

export class AppError extends HttpException {
  constructor(name: keyof typeof errors, message?: string) {
    const ErrorClass = errors[name].error
    const error = message ? new ErrorClass(message) : new ErrorClass()

    super(error.getResponse(), error.getStatus())
  }
}
