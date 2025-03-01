import { Box } from '../box'
import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { button, type ButtonVariants } from './button.css'

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants> &
  ButtonVariants & {
    sx?: Sprinkles
  }

export function Button({
  sx,
  children,
  variant,
  color,
  size,
  mode,
  className,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <Box as="button" sx={sx} className={classNames(className, button({ variant, color, size, mode }))} {...props}>
      {children}
    </Box>
  )
}
