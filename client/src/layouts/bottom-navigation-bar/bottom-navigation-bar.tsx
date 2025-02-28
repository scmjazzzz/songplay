'use client'

import { createElement } from 'react'
import { ROUTES } from '@/shared/constants/routes'
import { ActiveLink } from '@/shared/components/active-link'
import { Feed, Profile, Search, Shorts, Write } from '@/shared/components/icon'
import { Text } from '@/shared/components/text'
import { li, link, nav, svg, text, ul } from './bottom-navigation-bar.css'

const navigationList = [
  { href: ROUTES.FEED, name: 'Feed', icon: Feed },
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
          <li key={crypto.randomUUID()} className={li}>
            <ActiveLink href={href} className={link}>
              {({ isActive }) => (
                <>
                  {createElement(icon, { className: svg({ isActive }) })}
                  <Text as="span" variant="textRegular1" className={text({ isActive })}>
                    {name}
                  </Text>
                </>
              )}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
