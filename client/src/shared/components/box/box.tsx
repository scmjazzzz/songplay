import { sprinkles, type Sprinkles } from '@/styles/sprinkles'
import { classNames } from '@/styles/utils'

type Props<Tag extends React.ElementType> = {
  as?: Tag
  sx?: Sprinkles
  className?: string
} & React.ComponentPropsWithoutRef<Tag>

type BoxComponent = <Tag extends React.ElementType = 'div'>(
  props: React.PropsWithChildren<Props<Tag>> & {
    ref?: React.ComponentPropsWithRef<Tag>['ref']
  },
) => React.ReactElement | null

export const Box: BoxComponent = ({ as, children, sx, className, ...props }) => {
  const Element = as ?? 'div'
  const style = classNames(className, sx && sprinkles(sx))

  return (
    <Element className={style} {...props}>
      {children}
    </Element>
  )
}
