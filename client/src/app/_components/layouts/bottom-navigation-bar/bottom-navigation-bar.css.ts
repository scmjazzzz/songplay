import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const nav = style([
  sprinkles({
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: 'full',
    backgroundColor: 'background_default',
  }),
  {
    height: vars.base.bottom_navigation_bar_height,
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
      true: sprinkles({ color: 'foreground_default' }),
      false: sprinkles({ color: 'gray_800' }),
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
      true: sprinkles({ fill: 'foreground_primary' }),
      false: sprinkles({ fill: 'gray_800' }),
    },
  },
})
