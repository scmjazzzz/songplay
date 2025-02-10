import type { InputHTMLAttributes } from 'react'
import { Box } from '../box'
import type { Sprinkles } from '@/styles'
import { input, type InputVariants } from './input.css'

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  InputVariants & {
    sx?: Sprinkles
  }

export function Input({ sx, size, color, variant, ...props }: Props) {
  return <Box as="input" sx={sx} className={input({ size, color, variant })} {...props}></Box>
}
