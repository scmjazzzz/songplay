import { Text } from '@/shared/components/text'
import { DesktopHeader } from '../../header/desktop'
import { AsideGnb } from '../../aside'
import { container, main, head, content, footer, aside } from './desktop-layout.css'

type Props = {
  title: string
}

export function DesktopLayout({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={container}>
      <aside className={aside}>
        <DesktopHeader />
        <AsideGnb />
      </aside>
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
