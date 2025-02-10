import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function homeRedirect(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  return null
}
