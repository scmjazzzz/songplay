import { Box } from '../box'
import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { button, dot, loading, type ButtonVariants } from './button.css'

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants> &
  ButtonVariants & {
    sx?: Sprinkles
    isLoading?: boolean
  }

export function Button({
  sx,
  children,
  variant,
  color,
  size,
  mode,
  className,
  isLoading,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <Box as="button" sx={sx} className={classNames(className, button({ variant, color, size, mode }))} {...props}>
      {isLoading ? <Loading size={size} /> : children}
    </Box>
  )
}

function Loading({ size }: ButtonVariants) {
  return (
    <span className={loading({ size })}>
      <span className={dot({ size })}></span>
      <span className={dot({ size })}></span>
      <span className={dot({ size })}></span>
    </span>
  )
}
