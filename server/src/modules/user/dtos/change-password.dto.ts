import { createZodDto } from 'nestjs-zod'
import { changePasswordSchema } from '../schemas/change-password.schema'

export class ChangePasswordDto extends createZodDto(changePasswordSchema.strict()) {}
