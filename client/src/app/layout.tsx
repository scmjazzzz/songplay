import { notoSansKr, roboto } from '@/styles/fonts'
import '@/styles/reset.css'
import '@/styles/vars.css'
import '@/styles/global.css'
import { Providers } from './_providers'

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko" data-theme="light">
      <body className={`${notoSansKr.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
