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

export const accessTokenPayloadSchema = z
  .object({
    type: z.literal('access_token'),
  })
  .merge(
    accessTokenSchema.pick({
      id: true,
      username: true,
      userId: true,
    }),
  )

export const refreshTokenPlayloadSchema = z
  .object({
    type: z.literal('refresh_token'),
  })
  .merge(
    refreshTokenSchema.pick({
      id: true,
      rotationCount: true,
    }),
  )

export type AccessTokenSchema = z.infer<typeof accessTokenSchema>

export type RefreshTokenSchema = z.infer<typeof refreshTokenSchema>

export type AccessTokenPayloadSchema = z.infer<typeof accessTokenPayloadSchema>

export type RefreshTokenPayloadSchema = z.infer<typeof refreshTokenPlayloadSchema>
