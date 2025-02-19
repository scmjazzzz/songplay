import { sprinkles } from '@/styles/sprinkles'

export const container = sprinkles({
  display: 'flex',
  flexDirection: 'column',
})

export const heading = sprinkles({
  paddingBottom: 8,
  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 'medium',
})

export const error = sprinkles({
  paddingTop: 8,
  fontSize: 12,
  color: 'danger',
  lineHeight: 'medium',
})
