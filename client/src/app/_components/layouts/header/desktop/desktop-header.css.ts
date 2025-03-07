import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles'

export const header = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    height: 60,
  },
])

export const link = sprinkles({
  display: 'flex',
  alignItems: 'center',
  height: 'full',
  horizontalPadding: 16,
  fontSize: 22,
  fontWeight: 'bold',
  color: 'foreground_default',
})
