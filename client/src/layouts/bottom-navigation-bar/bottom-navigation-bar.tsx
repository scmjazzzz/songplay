'use client'

import { createElement } from 'react'
import { Home, Profile, Search, Shorts, Write } from '@/shared/components/icon'
import { ActiveLink } from '@/shared/components/active-link'
import { ROUTES } from '@/shared/constants/routes'
import { link, list, nav, svgIcon, text, ul } from './bottom-navigation-bar.css'

const navigationList = [
  { href: ROUTES.HOME, name: 'Home', icon: Home },
  { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
  { href: ROUTES.SEARCH, name: '검색', icon: Search },
  { href: ROUTES.WRITE, name: '등록', icon: Write },
  { href: ROUTES.PROFILE, name: '프로필', icon: Profile },
]

export function BottomNavigationBar() {
  return (
    <nav className={nav}>
      <ul className={ul}>
        {navigationList.map(({ href, name, icon }) => (
          <li key={crypto.randomUUID()} className={list}>
            <ActiveLink href={href} className={link}>
              {({ isActive }) => (
                <>
                  {createElement(icon, {
                    className: svgIcon({ isActive }),
                  })}
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
