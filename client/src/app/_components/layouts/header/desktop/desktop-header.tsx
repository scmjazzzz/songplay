import { Link } from '@/components/link'
import { ROUTES } from '@/constants/routes'
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
