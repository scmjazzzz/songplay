import type { PropsWithChildren } from 'react'
import { HeaderBackButton, MobileHeader, type MobileHeaderProps } from '../header'
import { container, main } from './mobile-layout.css'

export type Props = (Omit<MobileHeaderProps, 'left'> & { isHeader?: true }) | { isHeader?: false }

export function BackNavigationLayout({ isHeader = true, children }: PropsWithChildren<Props>) {
  return (
    <div className={container}>
      {isHeader && <MobileHeader left={<HeaderBackButton />} />}
      <main className={main}>{children}</main>
    </div>
  )
}
