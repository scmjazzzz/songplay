import { sprinkles } from '@/styles/sprinkles'

export const form = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  height: 'full',
})

export const content = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 12,
})

export const bottom = sprinkles({
  paddingTop: 20,
})
