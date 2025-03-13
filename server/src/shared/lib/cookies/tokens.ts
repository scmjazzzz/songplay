import { Response } from 'express'
import { ACCESS_TOKEN, ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN, REFRESH_TOKEN_MAX_AGE } from '@/shared/constants/token'

type Tokens = {
  accessToken: string
  refreshToken: string
}

export function setTokenCookie(response: Response, tokens: Tokens) {
  response.cookie(ACCESS_TOKEN, tokens.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: ACCESS_TOKEN_MAX_AGE,
  })
  response.cookie(REFRESH_TOKEN, tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: REFRESH_TOKEN_MAX_AGE,
  })
}

export function clearTokenCookie(response: Response) {
  response.clearCookie(ACCESS_TOKEN)
  response.clearCookie(REFRESH_TOKEN)
}
