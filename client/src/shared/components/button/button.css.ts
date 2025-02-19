import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const button = recipe({
  base: sprinkles({
    borderRadius: 6,
    fontWeight: 'medium',
    transition: 'backgroundColor',
  }),
  variants: {
    variant: {
      contained: {},
    },
    color: {
      primary: {},
    },
    size: {
      small: [sprinkles({ fontSize: 12, horizontalPadding: 10 }), { height: 32 }],
      medium: [sprinkles({ fontSize: 14, horizontalPadding: 16 }), { height: 40 }],
      large: [sprinkles({ fontSize: 16, horizontalPadding: 22 }), { height: 48 }],
    },
    mode: {
      inline: {},
      full: sprinkles({ width: 'full' }),
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'contained', color: 'primary' },
      style: sprinkles({
        backgroundColor: {
          default: 'primary',
          hover: 'primary_hover',
        },
        color: 'white',
      }),
    },
  ],
  defaultVariants: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    mode: 'inline',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
