import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    height: 'full',
  }),
  {
    paddingTop: vars.base.mobile_header_height,
    paddingBottom: vars.base.bottom_navigation_bar_height,
  },
])

export const main = style([
  sprinkles({
    flex: 1,
    backgroundColor: 'default_background',
  }),
  {
    paddingTop: vars.base.mobile_layout_gap,
    paddingBottom: vars.base.mobile_layout_gap,
  },
])
