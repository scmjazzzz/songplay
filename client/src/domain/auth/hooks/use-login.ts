import { useMutation } from '@tanstack/react-query'
import { authService } from '../service/auth'
import type { LoginSchema } from '../schemas'
import type { CustomUseMutationOptions } from '@/shared/types/react-query-type'

export function useLogin(options: CustomUseMutationOptions<typeof authService.login, 'mutationFn'> = {}) {
  return useMutation({
    mutationFn: ({ username, password }: LoginSchema) => authService.login({ username, password }),
    ...options,
  })
}
