'use client'

import { usePathname } from 'next/navigation'
import { Link, type Props as LinkProps } from '../link'

type Props = Omit<LinkProps, 'className' | 'children'> & {
  className?: string | ((props: { isActive: boolean }) => string)
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)
}

export function ActiveLink({ href, className, children, ...props }: Props) {
  const pathname = usePathname()
  const isActive = href === pathname
  const style = typeof className === 'function' ? className({ isActive }) : className
  const content = typeof children === 'function' ? children({ isActive }) : children

  return (
    <Link href={href} className={style} {...props}>
      {content}
    </Link>
  )
}
