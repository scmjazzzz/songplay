import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const container = recipe({
  base: sprinkles({
    display: 'grid',
    width: 'full',
    height: 'full',
  }),
  variants: {
    variant: {
      maxWidthForm: {
        maxWidth: '540px',
      },
    },
    justify: {
      center: sprinkles({ justifySelf: 'center' }),
    },
    align: {
      center: sprinkles({ alignItems: 'center' }),
    },
  },
})

export type ContainerVariants = RecipeVariants<typeof container>
