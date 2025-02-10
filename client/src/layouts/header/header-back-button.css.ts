import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles'

export const button = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'full',
  horizontalPadding: 18,
})

export const iconSvg = style([
  sprinkles({
    fill: 'text_default',
  }),
  {
    width: 20,
    height: 20,
  },
])
