import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { Box } from '../box'
import { text, type TextVariants } from './text.css'

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong'

type Props = {
  sx?: Sprinkles
  as?: TextElement
  className?: string
} & TextVariants

export function Text({ as, sx, children, className, ...props }: React.PropsWithChildren<Props>) {
  return (
    <Box as={as ?? 'p'} sx={sx} className={classNames(className, text(props))}>
      {children}
    </Box>
  )
}
