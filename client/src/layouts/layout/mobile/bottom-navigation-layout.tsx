import { BottomNavigationBar } from '@/layouts/bottom-navigation-bar'
import { MobileHeader, type Props as MobileHeaderProps } from '@/layouts/header/mobile'
import { container, main } from './mobile-layout.css'

export type Props = (MobileHeaderProps & { isHeader?: true }) | { isHeader?: false }

export function BottomNavigationLayout({ isHeader = true, children, ...props }: React.PropsWithChildren<Props>) {
  return (
    <div className={container({ isHeader, layout: 'bottomNavigation' })}>
      {isHeader && <MobileHeader {...props} />}
      <main className={main({ isHeader, layout: 'bottomNavigation' })}>{children}</main>
      <BottomNavigationBar />
    </div>
  )
}
