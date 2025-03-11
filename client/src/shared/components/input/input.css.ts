import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const input = recipe({
  base: sprinkles({
    width: 'full',
    color: { default: 'foreground_default', placeholder: 'foreground_default_placeholder' },
    horizontalPadding: 14,
  }),
  variants: {
    variant: {
      outlined: [
        sprinkles({
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: 'solid',
        }),
        {
          transition: 'background-color, border-color .15s ease',
        },
      ],
    },
    color: {
      default: {},
    },
    size: {
      small: [sprinkles({ fontSize: 14 }), { height: 40 }],
      medium: [sprinkles({ fontSize: 16 }), { height: 46 }],
      large: [sprinkles({ fontSize: 18 }), { height: 52 }],
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'outlined', color: 'default' },
      style: sprinkles({
        borderColor: { default: 'stroke_default', focus: 'stroke_default_focus' },
        backgroundColor: { disabled: 'background_default_disabled' },
      }),
    },
  ],
  defaultVariants: {
    size: 'medium',
    color: 'default',
    variant: 'outlined',
  },
})

export type InputVariants = NonNullable<RecipeVariants<typeof input>>
