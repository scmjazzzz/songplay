import { Noto_Sans_KR, Roboto } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/vars.css'
import '@/styles/global.css'

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-noto-sans-kr',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-family-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" data-theme="light">
      <body className={`${notoSansKr.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
