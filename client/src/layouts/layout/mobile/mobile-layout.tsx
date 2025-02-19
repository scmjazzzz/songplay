import type { PropsWithChildren } from 'react'
import { BottomNavigationLayout, type Props as BottomNavigationLayoutProps } from './bottom-navigation'
import { BackNavigationLayout, type Props as BackNavigationLayoutProps } from './back-navigation'

type Props =
  | ({ mode: 'bottom-navigation' } & BottomNavigationLayoutProps)
  | ({ mode: 'back-navigation' } & BackNavigationLayoutProps)

export function MobileLayout({ mode, children, ...props }: PropsWithChildren<Props>) {
  switch (mode) {
    case 'bottom-navigation': {
      return <BottomNavigationLayout {...props}>{children}</BottomNavigationLayout>
    }

    case 'back-navigation': {
      return <BackNavigationLayout {...props}>{children}</BackNavigationLayout>
    }
  }
}
