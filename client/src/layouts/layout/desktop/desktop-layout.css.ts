import { sprinkles } from '@/styles/sprinkles'

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  minHeight: 'screen',
})

export const content = sprinkles({
  display: 'flex',
  flex: 1,
})

export const main = sprinkles({
  flex: 1,
})

export const footer = sprinkles({
  position: 'sticky',
  bottom: 0,
})
