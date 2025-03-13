import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { Box } from '../box'
import { container, type ContainerVariants } from './container.css'

type Props = ContainerVariants & {
  sx?: Sprinkles
  className?: string
}

export function Container({ sx, children, className, ...props }: React.PropsWithChildren<Props>) {
  return (
    <Box sx={sx} className={classNames(className, container(props))}>
      {children}
    </Box>
  )
}
