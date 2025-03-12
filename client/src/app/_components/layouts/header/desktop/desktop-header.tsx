import { Link } from '@/shared/components/link'
import { ROUTES } from '@/shared/constants/routes'
import { header, link } from './desktop-header.css'

export function DesktopHeader() {
  return (
    <header className={header}>
      <Link href={ROUTES.FEED} className={link}>
        songplay
      </Link>
    </header>
  )
}
