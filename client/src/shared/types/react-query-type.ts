import type { UseMutationOptions } from '@tanstack/react-query'
import type { ErrorSchema } from '../schemas/error'

export type CustomUseMutationOptions<T extends (...args: any) => any, O extends keyof UseMutationOptions> = Omit<
  UseMutationOptions<Awaited<ReturnType<T>>, ErrorSchema, Parameters<T>[0]>,
  O
>
