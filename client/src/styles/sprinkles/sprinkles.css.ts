import { createSprinkles } from '@vanilla-extract/sprinkles'
import { responsiveProperties, statusProperties } from './properties'

export const sprinkles = createSprinkles(responsiveProperties, statusProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
