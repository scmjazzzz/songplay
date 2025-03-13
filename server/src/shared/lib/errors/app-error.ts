import { BadRequestException, HttpException } from '@nestjs/common'

const appErrors = {
  InvalidEnv: {
    error: BadRequestException,
    message: `Invalid environment variable`,
  },
} as const

export class AppError extends HttpException {
  constructor(name: keyof typeof appErrors, target: string) {
    const { error: ErrorClass, message: appErrorMessage } = appErrors[name]

    const formattedMessage = AppError.formatMessage(target, appErrorMessage)
    const error = new ErrorClass(formattedMessage)

    super(error.getResponse(), error.getStatus())
  }

  private static formatMessage(target: string | undefined, appErrorMessage: string) {
    return `${appErrorMessage} ${target}`
  }
}
