import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const aside = style([
  sprinkles({
    position: 'sticky',
    top: 0,
    height: 'screen',
    backgroundColor: 'default_background',
  }),
  {
    minWidth: vars.base.desktop_aside_width,
  },
])
