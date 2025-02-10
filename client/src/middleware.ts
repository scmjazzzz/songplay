import { type NextRequest } from 'next/server'
import { deviceCheckMiddleware, rootRedirectMiddleware } from './middlewares'

export function middleware(request: NextRequest) {
  const deviceResponse = deviceCheckMiddleware(request)
  const redirectResponse = rootRedirectMiddleware(request)

  if (redirectResponse) {
    return redirectResponse
  }

  return deviceResponse
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
