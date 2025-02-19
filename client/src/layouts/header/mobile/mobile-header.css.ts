import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const header = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'paper_default',
  }),
  {
    height: vars.base.mobile_header_height,
  },
])

export const heading = sprinkles({
  typography: 'heading3',
  color: 'default_text',
})

export const side = recipe({
  base: sprinkles({
    position: 'absolute',
    top: 0,
    left: 0,
    height: 'full',
  }),
  variants: {
    direction: {
      left: sprinkles({ left: 0 }),
      right: sprinkles({ right: 0 }),
    },
  },
})
