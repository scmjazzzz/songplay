import { z } from 'zod'

export const accessTokenSchema = z.object({
  id: z.number(),
  username: z.string(),
  userId: z.number(),
  iat: z.number(),
  exp: z.number(),
})

export const refreshTokenSchema = z.object({
  id: z.number(),
  rotationCount: z.number(),
  iat: z.number(),
  exp: z.number(),
})

export type AccessTokenSchema = z.infer<typeof accessTokenSchema>

export type RefreshTokenSchema = z.infer<typeof refreshTokenSchema>
