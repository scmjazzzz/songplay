import { DesktopHeader } from '@/layouts/header/desktop'
import { DesktopAsideGnb } from './desktop-aside-gnb'
import { aside } from './desktop-aside.css'

export function DesktopAside() {
  return (
    <aside className={aside}>
      <DesktopHeader />
      <DesktopAsideGnb />
    </aside>
  )
}
