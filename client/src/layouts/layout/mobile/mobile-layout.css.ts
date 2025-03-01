import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      height: 'full',
    }),
  ],
  variants: {
    layout: {
      bottomNavigation: {},
      backNavigation: {
        paddingTop: vars.base.mobile_header_height,
      },
    },
    isHeader: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { isHeader: true, layout: 'bottomNavigation' },
      style: {
        paddingTop: vars.base.mobile_header_height,
        paddingBottom: vars.base.bottom_navigation_bar_height,
      },
    },
    {
      variants: { isHeader: false, layout: 'bottomNavigation' },
      style: {
        paddingBottom: vars.base.bottom_navigation_bar_height,
      },
    },
  ],
})

export const main = recipe({
  base: sprinkles({
    flex: 1,
    backgroundColor: 'default_background',
  }),
  variants: {
    layout: {
      bottomNavigation: {},
      backNavigation: {
        paddingTop: vars.base.mobile_layout_gap,
      },
    },
    isHeader: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { isHeader: true, layout: 'bottomNavigation' },
      style: {
        paddingTop: vars.base.mobile_layout_gap,
        paddingBottom: vars.base.mobile_layout_gap,
      },
    },
    {
      variants: { isHeader: false, layout: 'bottomNavigation' },
      style: {
        paddingBottom: vars.base.mobile_layout_gap,
      },
    },
  ],
})
