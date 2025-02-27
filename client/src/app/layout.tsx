import { notoSansKr, roboto } from '@/styles/fonts'
import '@/styles/reset.css'
import '@/styles/vars.css'
import '@/styles/global.css'

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
