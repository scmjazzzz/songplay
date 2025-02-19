import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from 'react'
import { sprinkles, type Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'

type Props<Tag extends ElementType> = {
  as?: Tag
  sx?: Sprinkles
  className?: string
} & ComponentPropsWithoutRef<Tag>

type BoxComponent = <Tag extends ElementType = 'div'>(
  props: PropsWithChildren<Props<Tag>> & {
    ref?: ComponentPropsWithRef<Tag>['ref']
  },
) => ReactElement | null

export const Box: BoxComponent = ({ as, children, sx, className, ...props }) => {
  const Element = as ?? 'div'
  const style = classNames(sx && sprinkles(sx), className)

  return (
    <Element className={style} {...props}>
      {children}
    </Element>
  )
}
