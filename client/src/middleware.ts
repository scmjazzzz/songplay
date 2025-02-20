import { type NextRequest } from 'next/server'
import { deviceCheckMiddleware } from './middlewares'

export function middleware(request: NextRequest) {
  const deviceResponse = deviceCheckMiddleware(request)

  return deviceResponse
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
