import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@/styles'

export const header = style([
  sprinkles({
    position: 'sticky',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    backgroundColor: 'paper_default',
  }),
  {
    height: vars.mobile_header_height,
  },
])

export const heading = style([
  sprinkles({
    overflow: 'hidden',
    typography: 'heading3',
    color: 'text_default',
  }),
  {
    maxWidth: 160,
  },
])

export const side = recipe({
  base: sprinkles({
    position: 'absolute',
    height: 'full',
  }),
  variants: {
    position: {
      left: sprinkles({ left: 0 }),
      right: sprinkles({ right: 0 }),
    },
  },
})
