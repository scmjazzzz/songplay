import { container, inject, singleton } from 'tsyringe'
import type { UserSchema } from '@/shared/schemas/user'
import { HttpClient } from '@/shared/lib/client/http-client'
import type { LoginSchema, RegisterSchema } from '../schemas'

@singleton()
export class AuthService {
  private client: HttpClient

  constructor(@inject(HttpClient) client: HttpClient) {
    this.client = client
  }

  async register({ username, password }: RegisterSchema) {
    return this.client.post<UserSchema>('auth/register', {
      json: {
        username,
        password,
      },
    })
  }

  async login({ username, password }: LoginSchema) {
    return this.client.post<UserSchema>('auth/login', {
      json: {
        username,
        password,
      },
    })
  }
}

export const authService = container.resolve(AuthService)
