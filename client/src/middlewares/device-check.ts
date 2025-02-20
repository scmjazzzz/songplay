import { NextResponse, type NextRequest } from 'next/server'
import { HEADERS } from '@/shared/constants/headers'

export function deviceCheckMiddleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const secChUaMobile = request.headers.get('sec-ch-ua-mobile')

  const isMobile = secChUaMobile === '?1' || /mobile|android|iphone|ipad|ipod/i.test(userAgent)

  const response = NextResponse.next()
  response.headers.set(HEADERS.DEVICE_TYPE, isMobile ? 'mobile' : 'desktop')

  return response
}
