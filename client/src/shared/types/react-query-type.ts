import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'
import type { Error } from './error'

export type CustomUseMutationOptions<T extends (...args: any) => any, O extends keyof UseMutationOptions> = Omit<
  UseMutationOptions<Awaited<ReturnType<T>>, Error, Parameters<T>[0]>,
  O
>

export type CustomUseQueryOptions<T extends (...args: any) => any, O extends keyof UseQueryOptions> = Omit<
  UseQueryOptions<Awaited<ReturnType<T>>, Error, Awaited<ReturnType<T>>, any[]>,
  O
>
