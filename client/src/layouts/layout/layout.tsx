import type { PropsWithChildren } from 'react'
import { isServerMobile } from '@/shared/utils/is-server-mobile'
import { BottomNavigationLayout, type Props as BottomNavigationLayoutProps } from './bottom-navigation-layout'
import { BackNavigationLayout, type Props as BackNavigationLayoutProps } from './back-navigation-layout'

type Props =
  | ({ mode: 'bottom-navigation' } & BottomNavigationLayoutProps)
  | ({ mode: 'back-navigation' } & BackNavigationLayoutProps)

export async function Layout({ mode, children, ...props }: PropsWithChildren<Props>) {
  const isMobile = await isServerMobile()
  const newMode = isMobile ? mode : 'desktop'

  switch (newMode) {
    case 'back-navigation': {
      return <BackNavigationLayout {...props}>{children}</BackNavigationLayout>
    }

    case 'bottom-navigation': {
      return <BottomNavigationLayout {...props}>{children}</BottomNavigationLayout>
    }

    case 'desktop': {
      return <div>desktop</div>
    }
  }
}
