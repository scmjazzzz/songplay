import { useMutation } from '@tanstack/react-query'
import { authService } from '../service/auth'
import type { RegisterSchema } from '../schemas'
import type { CustomUseMutationOptions } from '@/shared/types/react-query-type'

export function useCreateUser(options: CustomUseMutationOptions<typeof authService.register, 'mutationFn'> = {}) {
  return useMutation({
    mutationFn: ({ username, password }: RegisterSchema) => authService.register({ username, password }),
    ...options,
  })
}
