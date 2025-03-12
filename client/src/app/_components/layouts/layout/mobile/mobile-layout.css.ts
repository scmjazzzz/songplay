import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

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
    backgroundColor: 'background_default',
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
