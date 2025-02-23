import type { PropsWithChildren } from 'react'
import { MobileHeader, type MobileHeaderProps } from '@/layouts/header/mobile'
import { BottomNavigationBar } from '@/layouts/bottom-navigation-bar'
import { container, main } from '../mobile-layout.css'

export type Props = (MobileHeaderProps & { isHeader?: true }) | { isHeader?: false }

export function BottomNavigationLayout({ isHeader = true, children, ...props }: PropsWithChildren<Props>) {
  return (
    <div className={container}>
      {isHeader && <MobileHeader {...props} />}
      <main className={main({ layout: 'bottomNavigation' })}>{children}</main>
      <BottomNavigationBar />
    </div>
  )
}
