import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const text = recipe({
  variants: {
    variant: {
      textBold1: sprinkles({ fontSize: 10, fontWeight: 'bold', lineHeight: 'small' }),
      textBold2: sprinkles({ fontSize: 12, fontWeight: 'bold', lineHeight: 'small' }),
      textBold3: sprinkles({ fontSize: 14, fontWeight: 'bold', lineHeight: 'small' }),
      textBold4: sprinkles({ fontSize: 16, fontWeight: 'bold', lineHeight: 'medium' }),
      textBold5: sprinkles({ fontSize: 18, fontWeight: 'bold', lineHeight: 'medium' }),
      textBold6: sprinkles({ fontSize: 20, fontWeight: 'bold', lineHeight: 'medium' }),
      textBold7: sprinkles({ fontSize: 22, fontWeight: 'bold', lineHeight: 'large' }),
      textBold8: sprinkles({ fontSize: 24, fontWeight: 'bold', lineHeight: 'large' }),
      textBold9: sprinkles({ fontSize: 26, fontWeight: 'bold', lineHeight: 'large' }),
      textMedium1: sprinkles({ fontSize: 10, fontWeight: 'medium', lineHeight: 'small' }),
      textMedium2: sprinkles({ fontSize: 12, fontWeight: 'medium', lineHeight: 'small' }),
      textMedium3: sprinkles({ fontSize: 14, fontWeight: 'medium', lineHeight: 'small' }),
      textMedium4: sprinkles({ fontSize: 16, fontWeight: 'medium', lineHeight: 'medium' }),
      textMedium5: sprinkles({ fontSize: 18, fontWeight: 'medium', lineHeight: 'medium' }),
      textMedium6: sprinkles({ fontSize: 20, fontWeight: 'medium', lineHeight: 'medium' }),
      textMedium7: sprinkles({ fontSize: 22, fontWeight: 'medium', lineHeight: 'large' }),
      textMedium8: sprinkles({ fontSize: 24, fontWeight: 'medium', lineHeight: 'large' }),
      textMedium9: sprinkles({ fontSize: 26, fontWeight: 'medium', lineHeight: 'large' }),
      textRegular1: sprinkles({ fontSize: 10, fontWeight: 'regular', lineHeight: 'small' }),
      textRegular2: sprinkles({ fontSize: 12, fontWeight: 'regular', lineHeight: 'small' }),
      textRegular3: sprinkles({ fontSize: 14, fontWeight: 'regular', lineHeight: 'small' }),
      textRegular4: sprinkles({ fontSize: 16, fontWeight: 'regular', lineHeight: 'medium' }),
      textRegular5: sprinkles({ fontSize: 18, fontWeight: 'regular', lineHeight: 'medium' }),
      textRegular6: sprinkles({ fontSize: 20, fontWeight: 'regular', lineHeight: 'medium' }),
      textRegular7: sprinkles({ fontSize: 22, fontWeight: 'regular', lineHeight: 'large' }),
      textRegular8: sprinkles({ fontSize: 24, fontWeight: 'regular', lineHeight: 'large' }),
      textRegular9: sprinkles({ fontSize: 26, fontWeight: 'regular', lineHeight: 'large' }),
    },
    align: {
      left: sprinkles({ textAlign: 'left' }),
      center: sprinkles({ textAlign: 'center' }),
      right: sprinkles({ textAlign: 'right' }),
    },
    color: {
      default: sprinkles({ color: 'foreground_default' }),
      primary: sprinkles({ color: 'foreground_primary' }),
      danger: sprinkles({ color: 'foreground_danger' }),
    },
  },
})

export type TextVariants = RecipeVariants<typeof text>
