import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'
import { keyframes, style } from '@vanilla-extract/css'

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
          default: 'primary',
          hover: 'primary_hover',
          disabled: 'primary_disabled',
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

export const loading = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
})

export const dot = style([
  sprinkles({
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 'half',
  }),
  {
    width: 8,
    height: 8,
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
])

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>
