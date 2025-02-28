import { BottomNavigationLayout, type Props as BottomNavigationLayoutProps } from './bottom-navigation-layout'
import { BackNavigationLayout, type Props as BackNavigationLayoutProps } from './back-navigation-layout'

type Props =
  | ({ mode: 'bottom-navigation' } & BottomNavigationLayoutProps)
  | ({ mode: 'back-navigation' } & BackNavigationLayoutProps)

export function MobileLayout({ mode, children, ...props }: React.PropsWithChildren<Props>) {
  switch (mode) {
    case 'bottom-navigation': {
      return <BottomNavigationLayout {...props}>{children}</BottomNavigationLayout>
    }

    case 'back-navigation': {
      return <BackNavigationLayout {...props}>{children}</BackNavigationLayout>
    }
  }
}
