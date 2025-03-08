import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const form = recipe({
  base: sprinkles({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background_default',
  }),
  variants: {
    mode: {
      full: sprinkles({
        height: 'full',
      }),
    },
  },
})

export const content = recipe({
  variants: {
    mode: {
      full: sprinkles({
        flex: 1,
      }),
    },
  },
})

export const bottom = sprinkles({
  paddingTop: 24,
  paddingBottom: 16,
})

export type FormVariants = RecipeVariants<typeof form>
