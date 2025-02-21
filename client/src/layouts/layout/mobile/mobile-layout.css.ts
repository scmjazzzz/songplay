import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'screen',
  }),
])

export const main = recipe({
  base: sprinkles({
    flex: 1,
  }),
  variants: {
    layout: {
      backNavigation: {
        height: `calc(100vh - ${vars.base.mobile_header_height})`,
      },
      bottomNavigation: {
        height: `calc(100vh - ${vars.base.mobile_header_height} - ${vars.base.bottom_navigation_height})`,
      },
    },
  },
})
