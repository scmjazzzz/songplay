import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles'

export const button = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'full',
  horizontalPadding: 18,
})

export const svg = style([
  sprinkles({
    fill: 'foreground_default',
  }),
  {
    width: 20,
    height: 20,
  },
])
