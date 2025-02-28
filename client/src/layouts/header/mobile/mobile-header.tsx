import type { ReactNode } from 'react'
import { Text } from '@/shared/components/text'
import { header, side } from './mobile-header.css'

export type Props = {
  title?: string
  left?: ReactNode
  right?: ReactNode
}

export function MobileHeader({ title = 'songplay', left, right }: Props) {
  return (
    <header className={header}>
      <Text as="h1" variant="textBold6" color="default">
        {title}
      </Text>
      {left && <div className={side({ direction: 'left' })}>{left}</div>}
      {right && <div className={side({ direction: 'right' })}>{right}</div>}
    </header>
  )
}
