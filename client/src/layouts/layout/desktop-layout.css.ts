import { sprinkles } from '@/styles'

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'column',
})

export const contents = sprinkles({
  display: 'flex',
  height: 'full',
})

export const main = sprinkles({
  flex: 1,
})

export const footer = sprinkles({
  position: 'sticky',
  bottom: 0,
  flex: 1,
})
