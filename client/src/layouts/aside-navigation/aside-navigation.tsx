import { DesktopHeader } from '../header/desktop'
import { AsideGnb } from './aisde-gnb'
import { aside } from './aside-navigation.css'

export function AsideNavigation() {
  return (
    <aside className={aside}>
      <DesktopHeader />
      <AsideGnb />
    </aside>
  )
}
