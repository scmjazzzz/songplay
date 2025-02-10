import type { PropsWithChildren } from 'react'
import { MobileHeader, type MobileHeaderProps } from '../header'
import { BottomNavigation } from '../bottom-navigation'
import { container, main } from './mobile-layout.css'

export type Props = (MobileHeaderProps & { isHeader?: true }) | { isHeader?: false }

export function BottomNavigationLayout({ isHeader = true, children }: PropsWithChildren<Props>) {
  return (
    <div className={container}>
      {isHeader && <MobileHeader />}
      <main className={main}>{children}</main>
      <BottomNavigation />
    </div>
  )
}
