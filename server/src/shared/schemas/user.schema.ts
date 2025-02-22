import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
})

export type UserSchema = z.infer<typeof userSchema>
