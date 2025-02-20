import type { InputHTMLAttributes } from 'react'
import { Box } from '../box'
import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { input, type InputVariants } from './input.css'

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputVariants> &
  InputVariants & {
    sx?: Sprinkles
  }

export function Input({ sx, size, color, variant, className, ...props }: Props) {
  return <Box as="input" sx={sx} className={classNames(input({ size, color, variant }), className)} {...props}></Box>
}
