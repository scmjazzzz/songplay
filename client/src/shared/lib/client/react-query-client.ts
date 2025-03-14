import { container, singleton } from 'tsyringe'
import { isServer, QueryClient } from '@tanstack/react-query'

@singleton()
export class ReactQueryClient {
  private browserQueryClient: QueryClient | null = null

  private makeQueryClient() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: Infinity,
          staleTime: Infinity,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: 0,
        },
      },
    })
  }

  getQueryClient = () => {
    if (isServer) {
      return this.makeQueryClient()
    }

    if (!this.browserQueryClient) {
      this.browserQueryClient = this.makeQueryClient()
    }

    return this.browserQueryClient
  }
}

export const reactQueryClient = container.resolve(ReactQueryClient)
