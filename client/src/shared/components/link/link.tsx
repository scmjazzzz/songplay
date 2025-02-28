import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import NextLink, { type LinkProps } from 'next/link'
import { sprinkles, type Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    sx?: Sprinkles
  }

export function Link({ sx, className, children, ...props }: PropsWithChildren<Props>) {
  const style = classNames(className, sx && sprinkles(sx))

  return (
    <NextLink className={style} {...props}>
      {children}
    </NextLink>
  )
}
