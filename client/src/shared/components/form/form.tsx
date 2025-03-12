import type { Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'
import { Box } from '../box'
import { form, content, bottom, type FormVariants } from './form.css'

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  footer?: React.ReactNode
  sx?: Sprinkles
} & FormVariants

export function Form({ children, className, footer, mode, ...props }: React.PropsWithChildren<Props>) {
  return (
    <Box as="form" className={classNames(className, form({ mode }))} {...props}>
      <div className={content({ mode })}>{children}</div>
      {footer && <div className={bottom}>{footer}</div>}
    </Box>
  )
}
