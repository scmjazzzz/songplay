'use client'

import { useRef } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { reactQueryClient } from '@/shared/lib/client/react-query-client'

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = useRef(reactQueryClient).current

  return <QueryClientProvider client={queryClient.getQueryClient()}>{children}</QueryClientProvider>
}
