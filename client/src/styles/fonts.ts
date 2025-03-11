import { Noto_Sans_KR, Roboto } from 'next/font/google'

export const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-noto-sans-kr',
})

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-family-roboto',
})
