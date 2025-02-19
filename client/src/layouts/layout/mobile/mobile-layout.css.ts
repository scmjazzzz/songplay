import { sprinkles } from '@/styles/sprinkles'
import { style } from '@vanilla-extract/css'

export const container = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'screen',
    height: 'full',
  }),
])

export const main = sprinkles({
  flex: 1,
  height: 'full',
})
