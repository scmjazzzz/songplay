import type { PropsWithChildren } from 'react'
import { DesktopHeader } from '../header'
import { container, contents, main } from './desktop-layout.css'

export function DesktopLayout({ children }: PropsWithChildren) {
  return (
    <div className={container}>
      <div className={contents}>
        <DesktopHeader />
        <main className={main}>{children}</main>
      </div>
    </div>
  )
}
