import { createZodDto } from 'nestjs-zod'
import { userSchema } from '../schemas/user.schema'

export class UserDto extends createZodDto(userSchema.strict()) {}
