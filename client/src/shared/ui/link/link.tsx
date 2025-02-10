import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import NextLink, { type LinkProps } from 'next/link'
import { classNames, sprinkles, type Sprinkles } from '@/styles'

export type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    sx?: Sprinkles
  }

export function Link({ sx, className, children, ...props }: PropsWithChildren<Props>) {
  const style = classNames(sx && sprinkles(sx), className)

  return (
    <NextLink className={style} {...props}>
      {children}
    </NextLink>
  )
}
