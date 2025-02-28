import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const nav = style([
  sprinkles({
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'default_background',
    boxSizing: 'content-box',
  }),
  {
    height: vars.base.bottom_navigation_bar_height,
    borderTop: `${vars.base.mobile_layout_gap} solid ${vars.color.gray_100}`,
  },
])

export const ul = sprinkles({
  display: 'flex',
  height: 'full',
})

export const li = sprinkles({
  flex: 1,
})

export const link = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 4,
  height: 'full',
})

export const text = recipe({
  variants: {
    isActive: {
      true: sprinkles({ color: 'default_text' }),
      false: sprinkles({ color: 'gray_700' }),
    },
  },
})

export const svg = recipe({
  base: {
    width: 20,
    height: 20,
  },
  variants: {
    isActive: {
      true: sprinkles({ fill: 'primary' }),
      false: sprinkles({ fill: 'gray_700' }),
    },
  },
})
