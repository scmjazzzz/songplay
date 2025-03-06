import '@/styles/reset.css'

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
