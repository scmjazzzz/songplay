import { Response } from 'express'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/tokens'

type Tokens = {
  accessToken: string
  refreshToken: string
}

export function setTokenCookie(response: Response, tokens: Tokens) {
  response.cookie(ACCESS_TOKEN, tokens.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 1000, // 1시간
  })
  response.cookie(REFRESH_TOKEN, tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
  })
}

export function clearTokenCookie(response: Response) {
  response.clearCookie(ACCESS_TOKEN)
  response.clearCookie(REFRESH_TOKEN)
}
