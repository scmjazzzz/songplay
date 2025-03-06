import { type NextRequest } from 'next/server'
import { rootRedirectMiddleware, setDeviceTypeMiddleware } from '@/middlewares'

export async function middleware(request: NextRequest) {
  const deviceResponse = setDeviceTypeMiddleware(request)
  const rootRedirectResponse = rootRedirectMiddleware(request)

  if (rootRedirectResponse) {
    return rootRedirectResponse
  }

  return deviceResponse
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
