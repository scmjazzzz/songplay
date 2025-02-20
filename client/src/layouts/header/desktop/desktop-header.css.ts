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

export const logo = sprinkles({
  display: 'flex',
  alignItems: 'center',
  height: 'full',
  typography: 'heading2',
  color: 'default_text',
})
