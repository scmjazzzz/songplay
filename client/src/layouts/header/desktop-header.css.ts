import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles, vars } from '@/styles'

export const aside = style([
  sprinkles({
    position: 'sticky',
    top: 0,
    backgroundColor: 'paper_default',
    height: 'full',
  }),
  {
    width: vars.base.desktop_aside_width,
  },
])

export const header = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    height: 60,
  },
])

export const logo = sprinkles({
  display: 'flex',
  alignItems: 'center',
  height: 'full',
  typography: 'heading3',
  color: 'text_default',
})

export const gnb = sprinkles({
  padding: 10,
})

export const ul = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 6,
})

export const link = recipe({
  base: sprinkles({
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: 10,
    borderRadius: 6,
    transition: 'backgroundColor',
  }),
  variants: {
    isActive: {
      true: sprinkles({
        backgroundColor: {
          default: 'primary_background',
          hover: 'primary_hover',
        },
      }),
      false: sprinkles({
        backgroundColor: {
          hover: 'default_background_after_primary_hover',
        },
      }),
    },
  },
})

export const iconSvg = recipe({
  base: {
    width: 24,
    height: 24,
  },
  variants: {
    isActive: {
      true: sprinkles({ fill: 'white' }),
      false: sprinkles({ fill: 'gray_700' }),
    },
  },
})

export const linkText = recipe({
  base: sprinkles({
    fontSize: 16,
  }),
  variants: {
    isActive: {
      true: sprinkles({ color: 'white' }),
      false: sprinkles({ color: 'gray_700' }),
    },
  },
})
