import { singleton } from 'tsyringe'
import ky, { HTTPError, type Input, type Options } from 'ky'
import { ENV_BASE_URL } from '@/shared/constants/env'

@singleton()
export class HttpClient {
  client = ky.create({
    prefixUrl: ENV_BASE_URL,
    credentials: 'omit',
  })

  private async handleError(error: unknown) {
    if (error instanceof HTTPError) {
      throw await error.response.json()
    }
  }

  async get<T>(url: Input, options?: Options) {
    try {
      const response = await this.client.get<T>(url, options)
      return response.json()
    } catch (error) {
      await this.handleError(error)
    }
  }

  async post<T>(url: Input, options?: Options) {
    try {
      const response = await this.client.post<T>(url, options).json()
      return response
    } catch (error) {
      await this.handleError(error)
    }
  }

  async patch<T>(url: Input, options?: Options) {
    try {
      const response = await this.client.patch<T>(url, options).json()
      return response
    } catch (error) {
      await this.handleError(error)
    }
  }

  async delete<T>(url: Input, options?: Options) {
    try {
      const response = await this.client.delete<T>(url, options).json()
      return response
    } catch (error) {
      await this.handleError(error)
    }
  }
}
