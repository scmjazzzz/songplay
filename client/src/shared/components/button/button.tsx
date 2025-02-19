import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Box } from '../box'
import type { Sprinkles } from '@/styles/sprinkles'
import { button, type ButtonVariants } from './button.css'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants> &
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
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Box as="button" sx={sx} className={button({ variant, color, size, mode })} {...props}>
      {children}
    </Box>
  )
}
