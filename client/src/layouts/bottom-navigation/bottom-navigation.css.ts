import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles, vars } from '@/styles'

export const nav = style([
  sprinkles({
    position: 'sticky',
    bottom: 0,
  }),
  {
    height: vars.bottom_navigation_height,
  },
])

export const ul = sprinkles({
  display: 'flex',
  height: 'full',
})

export const list = sprinkles({
  flex: 1,
})

export const link = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 6,
  height: 'full',
})

export const svgIcon = recipe({
  base: { width: 22, height: 22 },
  variants: {
    isActive: {
      true: sprinkles({ fill: 'primary' }),
      false: sprinkles({ fill: 'gray_700' }),
    },
  },
})

export const text = recipe({
  base: sprinkles({ fontSize: 10 }),
  variants: {
    isActive: {
      true: sprinkles({ color: 'text_default' }),
      false: sprinkles({ color: 'gray_700' }),
    },
  },
})
