import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const header = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: 'full',
    backgroundColor: 'background_default',
    boxSizing: 'content-box',
  }),
  {
    height: vars.base.mobile_header_height,
    borderBottom: `${vars.base.mobile_layout_gap} solid ${vars.color.background_base}`,
  },
])

export const side = recipe({
  base: sprinkles({
    position: 'absolute',
    top: 0,
    height: 'full',
  }),
  variants: {
    direction: {
      left: sprinkles({ left: 0 }),
      right: sprinkles({ right: 0 }),
    },
  },
})
