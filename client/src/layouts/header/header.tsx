import { type ReactNode } from 'react'
import { header, heading, side } from './header.css'

type Props = {
  left?: ReactNode
  right?: ReactNode
}

export function Header({ left, right }: Props) {
  return (
    <header className={header}>
      <h1 className={heading}>songplay</h1>
      {left && <div className={side({ position: 'left' })}>{left}</div>}
      {right && <div className={side({ position: 'right' })}>{right}</div>}
    </header>
  )
}
