import type { ReactNode } from 'react'
import { header, heading, side } from './mobile-header.css'

export type MobileHeaderProps = {
  left?: ReactNode
  right?: ReactNode
}

export function MobileHeader({ left, right }: MobileHeaderProps) {
  return (
    <header className={header}>
      <strong className={heading}>songplay</strong>
      {left && <div className={side({ direction: 'left' })}>{left}</div>}
      {right && <div className={side({ direction: 'right' })}>{right}</div>}
    </header>
  )
}
