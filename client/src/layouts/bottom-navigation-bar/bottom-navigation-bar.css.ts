import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const nav = style([
  sprinkles({
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'paper_default',
  }),
  {
    height: vars.base.bottom_navigation_height,
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
  base: { width: 20, height: 20 },
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
      true: sprinkles({ color: 'default_text' }),
      false: sprinkles({ color: 'gray_700' }),
    },
  },
})
