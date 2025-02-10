'use client'

import { createElement } from 'react'
import { Feed, Profile, Search, Shorts, Write } from '@/shared/ui/icon'
import { ActiveLink } from '@/shared/ui/active-link'
import { link, nav, svgIcon, ul, list, text } from './bottom-navigation.css'
import { ROUTES } from '@/shared/constants/routes'

const navigationList = [
  { href: ROUTES.FEED, name: 'Feed', icon: Feed },
  { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
  { href: ROUTES.SEARCH, name: '검색', icon: Search },
  { href: ROUTES.WRITE, name: '등록', icon: Write },
  { href: ROUTES.PROFILE, name: '프로필', icon: Profile },
]

export function BottomNavigation() {
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
