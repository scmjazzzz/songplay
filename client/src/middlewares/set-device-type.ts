import { NextResponse, type NextRequest } from 'next/server'
import { HEADERS } from '@/shared/constants/headers'

export function setDeviceTypeMiddleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const secChUaMobile = request.headers.get('sec-ch-ua-mobile')

  const isSecChUaMobile = secChUaMobile === '?1'
  const isUserAgentMobile = /mobile|android|iphone|ipod/i.test(userAgent)
  const isIPadMobile = /\biPad\b/.test(userAgent) && /Macintosh/.test(userAgent) && 'ontouchend' in globalThis

  const isMobile = isSecChUaMobile || isUserAgentMobile || isIPadMobile

  const response = NextResponse.next()
  response.headers.set(HEADERS.DEVICE_TYPE, isMobile ? 'mobile' : 'desktop')

  return response
}
