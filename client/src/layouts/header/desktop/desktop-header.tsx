import { Link } from '@/shared/components/link'
import { ROUTES } from '@/shared/constants/routes'
import { header, logo } from './desktop-header.css'

export function DesktopHeader() {
  return (
    <header className={header}>
      <Link href={ROUTES.HOME} className={logo}>
        songplay
      </Link>
    </header>
  )
}
