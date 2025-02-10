'use client'

import { createElement } from 'react'
import { ActiveLink } from '@/shared/ui/active-link'
import { Link } from '@/shared/ui/link'
import { Feed, Search, Setting, Shorts, Write } from '@/shared/ui/icon'
import { ROUTES } from '@/shared/constants/routes'
import { aside, header, ul, logo, gnb, iconSvg, linkText, link } from './desktop-header.css'

const gnbList = [
  { href: ROUTES.FEED, name: 'Feed', icon: Feed },
  { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
  { href: ROUTES.SEARCH, name: '검색', icon: Search },
  { href: ROUTES.WRITE, name: '등록', icon: Write },
  { href: ROUTES.SETTING, name: '설정', icon: Setting },
]

export function DesktopHeader() {
  return (
    <aside className={aside}>
      <header className={header}>
        <Link href={ROUTES.FEED} className={logo}>
          songplay
        </Link>
      </header>
      <nav className={gnb}>
        <ul className={ul}>
          {gnbList.map(({ href, name, icon }) => (
            <li key={crypto.randomUUID()}>
              <ActiveLink href={href} className={({ isActive }) => link({ isActive })}>
                {({ isActive }) => (
                  <>
                    {createElement(icon, {
                      className: iconSvg({ isActive }),
                    })}
                    <span className={linkText({ isActive })}>{name}</span>
                  </>
                )}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
