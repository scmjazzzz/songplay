import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { Box } from '../box'
import { input, type InputVariants } from './input.css'

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputVariants> &
  InputVariants & {
    sx?: Sprinkles
  }

export function Input({ sx, size, color, variant, className, ...props }: Props) {
  return <Box as="input" sx={sx} className={classNames(className, input({ size, color, variant }))} {...props} />
}
