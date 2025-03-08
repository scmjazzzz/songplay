import { createZodDto } from 'nestjs-zod'
import { loginSchema } from '../schemas'

export class LoginDto extends createZodDto(loginSchema.strict()) {}
