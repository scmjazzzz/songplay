import { BadRequestException, HttpException } from '@nestjs/common'

const appErrors = {
  InvalidEnv: {
    error: BadRequestException,
    message: `Invalid environment variable`,
  },
} as const

export class AppError extends HttpException {
  constructor(name: keyof typeof appErrors, message?: string | string[]) {
    const { error: ErrorClass, message: appErrorMessage } = appErrors[name]

    const formattedMessage = AppError.formatMessage(message, appErrorMessage)
    const error = new ErrorClass(formattedMessage)

    super(error.getResponse(), error.getStatus())
  }

  private static formatMessage(message: string | string[] | undefined, appErrorMessage: string) {
    if (Array.isArray(message)) {
      return message.map((msg) => `${appErrorMessage} ${msg}`)
    }

    return message ?? appErrorMessage
  }
}
