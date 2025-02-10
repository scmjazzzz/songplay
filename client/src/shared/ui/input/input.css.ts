import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles'

export const input = recipe({
  base: sprinkles({
    width: 'full',
    color: { default: 'text_default', placeholder: 'default_placeholder' },
    horizontalPadding: 14,
  }),
  variants: {
    variant: {
      outlined: sprinkles({
        borderWidth: 1,
        borderRadius: 6,
        borderStyle: 'solid',
        transition: 'borderColor',
      }),
    },
    color: {
      default: {},
      danger: {},
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
        borderColor: { default: 'border_default', focus: 'default_border_focus' },
        backgroundColor: { disabled: 'default_disabled' },
      }),
    },
    {
      variants: { variant: 'outlined', color: 'danger' },
      style: sprinkles({
        borderColor: { default: 'border_danger', focus: 'default_border_focus' },
        backgroundColor: {
          default: 'danger_background',
          focus: 'paper_default',
          disabled: 'default_disabled',
        },
      }),
    },
  ],
  defaultVariants: {
    size: 'small',
    color: 'default',
    variant: 'outlined',
  },
})

export type InputVariants = RecipeVariants<typeof input>
