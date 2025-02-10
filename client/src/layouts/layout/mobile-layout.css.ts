import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles'

export const container = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'screen',
  }),
])

export const main = sprinkles({
  flex: 1,
})
