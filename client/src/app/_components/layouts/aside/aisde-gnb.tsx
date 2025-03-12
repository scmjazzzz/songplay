'use client'

import { createElement } from 'react'
import { Text } from '@/shared/components/text'
import { ActiveLink } from '@/shared/components/active-link'
import { Feed, Search, Shorts, Write } from '@/shared/components/icon'
import { ROUTES } from '@/shared/constants/routes'
import { randomId } from '@/shared/utils/random-id'
import { nav, li, svg, ul, text, link } from './aisde-gnb.css'

const gnbList = [
  { href: ROUTES.FEED, name: 'Feed', icon: Feed },
  { href: ROUTES.SHORTS, name: 'Shorts', icon: Shorts },
  { href: ROUTES.SEARCH, name: '검색', icon: Search },
  { href: ROUTES.WRITE, name: '등록', icon: Write },
]

export function AsideGnb() {
  return (
    <nav className={nav}>
      <ul className={ul}>
        {gnbList.map(({ href, name, icon }) => (
          <li key={randomId()} className={li}>
            <ActiveLink href={href} className={({ isActive }) => link({ isActive })}>
              {({ isActive }) => (
                <>
                  {createElement(icon, { className: svg({ isActive }) })}
                  <Text as="span" variant="textRegular4" className={text({ isActive })}>
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
