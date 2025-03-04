import { container, inject, singleton } from 'tsyringe'
import { HttpClient } from '@/shared/lib/client'
import type { UserSchema } from '@/shared/schemas/user'
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

  async refresh() {
    await this.client.post('auth/refresh', {
      credentials: 'include',
    })
  }
}

export const authService = container.resolve(AuthService)
