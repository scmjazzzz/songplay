import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { keyframes } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles'

export const button = recipe({
  base: [
    sprinkles({
      borderRadius: 6,
      fontWeight: 'medium',
    }),
    {
      transition: 'background-color .15s ease',
    },
  ],
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
          default: 'background_primary',
          hover: 'background_primary_hover',
          disabled: 'background_primary_disabled',
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

const loadingKeyframe = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 0.8 },
  '100%': { opacity: 0 },
})

export const loading = recipe({
  base: sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  variants: {
    size: {
      small: sprinkles({ gap: 4 }),
      medium: sprinkles({ gap: 6 }),
      large: sprinkles({ gap: 8 }),
    },
  },
})

export const dot = recipe({
  base: [
    sprinkles({
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: 'half',
    }),
    {
      animation: `${loadingKeyframe} 1s infinite`,
      selectors: {
        '&:nth-child(1)': {
          animationDelay: '0s',
        },
        '&:nth-child(2)': {
          animationDelay: '.1s',
        },
        '&:nth-child(3)': {
          animationDelay: '.2s',
        },
      },
    },
  ],
  variants: {
    size: {
      small: {
        width: 4,
        height: 4,
      },
      medium: {
        width: 6,
        height: 6,
      },
      large: {
        width: 8,
        height: 8,
      },
    },
  },
})

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>
