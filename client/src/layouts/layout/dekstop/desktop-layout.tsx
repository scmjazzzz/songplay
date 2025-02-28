import { AsideNavigation } from '@/layouts/aside-navigation'
import { Text } from '@/shared/components/text'
import { container, main, head, content, footer } from './desktop-layout.css'

type Props = {
  title: string
}

export function DesktopLayout({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={container}>
      <AsideNavigation />
      <main className={main}>
        <div className={head}>
          <Text as="h1" color="default" variant="textBold9">
            {title}
          </Text>
        </div>
        <div className={content}>{children}</div>
      </main>
      <div className={footer}></div>
    </div>
  )
}
