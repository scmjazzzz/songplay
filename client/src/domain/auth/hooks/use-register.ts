import { useMutation } from '@tanstack/react-query'
import type { CustomUseMutationOptions } from '@/shared/types/react-query-type'
import type { RegisterSchema } from '../schemas'
import { authService } from '../services/auth'

export function useRegister(options: CustomUseMutationOptions<typeof authService.register, 'mutationFn'> = {}) {
  return useMutation({
    mutationFn: ({ username, password }: RegisterSchema) => authService.register({ username, password }),
    ...options,
  })
}
