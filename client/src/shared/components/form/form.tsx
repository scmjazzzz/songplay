import type { FormHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { Box } from '../box'
import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { bottom, content, form } from './form.css'

type Props = FormHTMLAttributes<HTMLFormElement> & {
  footer?: ReactNode
  sx?: Sprinkles
}

export function Form({ children, footer, sx, className, ...props }: PropsWithChildren<Props>) {
  return (
    <Box as="form" sx={sx} className={classNames(form, className)} {...props}>
      <div className={content}>{children}</div>
      {footer && <div className={bottom}>{footer}</div>}
    </Box>
  )
}
