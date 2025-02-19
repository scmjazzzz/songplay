import type { ReactNode } from 'react'
import { header, heading, side } from './mobile-header.css'

export type MobileHeaderProps = {
  title?: string
  left?: ReactNode
  right?: ReactNode
}

export function MobileHeader({ title = 'songplay', left, right }: MobileHeaderProps) {
  return (
    <header className={header}>
      <h1 className={heading}>{title}</h1>
      {left && <div className={side({ direction: 'left' })}>{left}</div>}
      {right && <div className={side({ direction: 'right' })}>{right}</div>}
    </header>
  )
}
