'use client'

import 'reflect-metadata'
import { ReactQueryProvider } from './react-query-provider'

export function Providers({ children }: React.PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
