'use client'

import { createElement } from 'react'
import { Feed, Profile, Search, Shorts, Write } from '@/shared/components/icon'
import { ActiveLink } from '@/shared/components/active-link'
import { Text } from '@/shared/components/text'
import { ROUTES } from '@/shared/constants/routes'
import { randomId } from '@/shared/utils/random-id'
import { li, link, nav, svg, text, ul } from './bottom-navigation-bar.css'

export function BottomNavigationBar() {
  const username = null

  const navigationList = [
    { href: ROUTES.FEED, name: 'Feed', icon: Feed },
    { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
    { href: ROUTES.SEARCH, name: '검색', icon: Search },
    { href: ROUTES.WRITE, name: '등록', icon: Write },
    { href: `/${username}`, name: username ?? '프로필', icon: Profile },
  ]

  return (
    <nav className={nav}>
      <ul className={ul}>
        {navigationList.map(({ href, name, icon }) => (
          <li key={randomId()} className={li}>
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
