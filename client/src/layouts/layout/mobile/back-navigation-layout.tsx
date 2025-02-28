import { HeaderBackButton, MobileHeader, type Props as MobileHeaderProps } from '@/layouts/header/mobile'
import { container, main } from './mobile-layout.css'

export type Props = Omit<MobileHeaderProps, 'left'>

export function BackNavigationLayout({ children, ...props }: React.PropsWithChildren<Props>) {
  return (
    <div className={container}>
      <MobileHeader left={<HeaderBackButton />} {...props} />
      <main className={main}>{children}</main>
    </div>
  )
}
