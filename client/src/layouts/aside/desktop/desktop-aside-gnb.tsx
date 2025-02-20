'use client'

import { createElement } from 'react'
import { ActiveLink } from '@/shared/components/active-link'
import { Home, Shorts, Write } from '@/shared/components/icon'
import { ROUTES } from '@/shared/constants/routes'
import { link, nav, svgIcon, text, ul } from './desktop-aside-gnb.css'

const gnbList = [
  { href: ROUTES.HOME, name: 'Home', icon: Home },
  { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
  { href: ROUTES.WRITE, name: 'Write', icon: Write },
]

export function DesktopAsideGnb() {
  return (
    <nav className={nav}>
      <ul className={ul}>
        {gnbList.map(({ href, name, icon }) => (
          <li key={crypto.randomUUID()}>
            <ActiveLink href={href} className={link}>
              {({ isActive }) => (
                <>
                  {createElement(icon, { className: svgIcon({ isActive }) })}
                  <span className={text({ isActive })}>{name}</span>
                </>
              )}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
