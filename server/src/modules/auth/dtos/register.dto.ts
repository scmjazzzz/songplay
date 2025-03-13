import { createZodDto } from 'nestjs-zod'
import { registerSchema } from '../schemas'

export class RegisterDto extends createZodDto(registerSchema.strict()) {}
