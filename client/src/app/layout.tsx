import 'reflect-metadata'
import { notoSansKr, roboto } from '@/styles/fonts'
import { Providers } from '@/providers/providers'
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
      <body className={`${notoSansKr.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
