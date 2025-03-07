import NextLink, { type LinkProps } from 'next/link'
import { sprinkles, type Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'

export type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    sx?: Sprinkles
  }

export function Link({ sx, className, children, ...props }: React.PropsWithChildren<Props>) {
  const style = classNames(className, sx && sprinkles(sx))

  return (
    <NextLink className={style} {...props}>
      {children}
    </NextLink>
  )
}
