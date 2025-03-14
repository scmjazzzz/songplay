import { useMutation } from '@tanstack/react-query'
import type { CustomUseMutationOptions } from '@/shared/types/react-query-type'
import type { LoginSchema } from '../schemas'
import { authService } from '../services/auth'

export function useLogin(options: CustomUseMutationOptions<typeof authService.login, 'mutationFn'> = {}) {
  return useMutation({
    mutationFn: ({ username, password }: LoginSchema) => authService.login({ username, password }),
    ...options,
  })
}
