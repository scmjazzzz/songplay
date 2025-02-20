import type { PropsWithChildren } from 'react'
import { DesktopAside } from '@/layouts/aside/desktop'
import { container, contents, main, footer } from './desktop-layout.css'

export function DesktopLayout({ children }: PropsWithChildren) {
  return (
    <div className={container}>
      <div className={contents}>
        <DesktopAside />
        <main className={main}>{children}</main>
      </div>
      <div className={footer}></div>
    </div>
  )
}
