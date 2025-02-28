import { NextResponse, type NextRequest } from 'next/server'
import { ROUTES } from '@/shared/constants/routes'

export function rootRedirectMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    return NextResponse.redirect(new URL(ROUTES.FEED, request.url))
  }

  return null
}
