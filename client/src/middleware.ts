import type { NextRequest } from 'next/server'
import { homeRedirect } from './middlewares'

export function middleware(request: NextRequest) {
  return homeRedirect(request)
}

export const config = {
  matcher: '/',
}
