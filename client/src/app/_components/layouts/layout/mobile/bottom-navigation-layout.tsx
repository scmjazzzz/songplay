import { MobileHeader, type Props as MobileHeaderProps } from '../../header/mobile'
import { BottomNavigationBar } from '../../bottom-navigation-bar'
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
