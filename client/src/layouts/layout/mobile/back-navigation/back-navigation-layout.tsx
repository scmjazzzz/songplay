import type { PropsWithChildren } from 'react'
import { HeaderBackButton, MobileHeader, type MobileHeaderProps } from '@/layouts/header/mobile'
import { container, main } from '../mobile-layout.css'

export type Props = (Omit<MobileHeaderProps, 'left'> & { isHeader?: true }) | { isHeader?: false }

export function BackNavigationLayout({ isHeader = true, children, ...props }: PropsWithChildren<Props>) {
  return (
    <div className={container}>
      {isHeader && <MobileHeader left={<HeaderBackButton />} {...props} />}
      <main className={main({ layout: 'backNavigation' })}>{children}</main>
    </div>
  )
}
