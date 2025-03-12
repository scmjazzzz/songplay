import { Text } from '@/shared/components/text'
import { blind } from '@/styles/styles.css'
import { header, side } from './mobile-header.css'

export type Props = {
  title?: string
  blindTitle?: string
  left?: React.ReactNode
  right?: React.ReactNode
}

export function MobileHeader({ title = 'songplay', blindTitle, left, right }: Props) {
  return (
    <header className={header}>
      <Text as={blindTitle ? 'strong' : 'h1'} variant="textBold6" color="default">
        {title}
      </Text>
      {blindTitle && <h1 className={blind}>{blindTitle}</h1>}
      {left && <div className={side({ direction: 'left' })}>{left}</div>}
      {right && <div className={side({ direction: 'right' })}>{right}</div>}
    </header>
  )
}
