import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
})

export const userResponseSchema = z.object({
  user: userSchema,
})

export type UserSchema = z.infer<typeof userSchema>
