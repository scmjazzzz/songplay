import { z } from 'zod'

export const errorSchema = z.object({
  name: z.string(),
  errorMessage: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
})

export type ErrorSchema = z.infer<typeof errorSchema>
