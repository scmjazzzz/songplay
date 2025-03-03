import type { UseMutationOptions } from '@tanstack/react-query'
import type { Error } from './error'

export type CustomUseMutationOptions<T extends (...args: any) => any, O extends keyof UseMutationOptions> = Omit<
  UseMutationOptions<Awaited<ReturnType<T>>, Error, Parameters<T>[0]>,
  O
>
