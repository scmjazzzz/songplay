import { sprinkles } from '@/styles/sprinkles'

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'screen',
})

export const main = sprinkles({
  flex: 1,
  verticalPadding: 12,
  backgroundColor: 'default_background',
})
