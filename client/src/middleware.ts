import { type NextRequest } from 'next/server'
import { rootRedirectMiddleware } from '@/middlewares'

export async function middleware(request: NextRequest) {
  const rootRedirectResponse = rootRedirectMiddleware(request)

  return rootRedirectResponse
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
