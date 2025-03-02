import { z } from 'zod'

export const registerSchema = z.object({
  username: z
    .string()
    .min(8)
    .max(16)
    .regex(/^[a-zA-Z0-9]+$/),
  password: z
    .string()
    .min(8)
    .max(16)
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/),
})

export type RegisterSchema = z.infer<typeof registerSchema>
