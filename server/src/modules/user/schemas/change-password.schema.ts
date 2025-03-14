import { z } from 'zod'

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(8)
    .max(16)
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/),
  changePassword: z
    .string()
    .min(8)
    .max(16)
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/),
})

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>
