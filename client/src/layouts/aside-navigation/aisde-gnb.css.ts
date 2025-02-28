import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/styles/sprinkles'

export const nav = sprinkles({
  padding: 12,
})

export const ul = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

export const li = sprinkles({
  flex: 1,
})

export const link = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 'full',
      verticalPadding: 10,
      horizontalPadding: 12,
      borderRadius: 6,
    }),
    {
      transition: 'background-color .15s ease',
    },
  ],
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
          hover: 'default_after_primary_hover',
        },
      }),
    },
  },
})

export const svg = recipe({
  base: {
    width: 22,
    height: 22,
  },
  variants: {
    isActive: {
      true: sprinkles({ fill: 'white' }),
      false: sprinkles({ fill: 'gray_700' }),
    },
  },
})

export const text = recipe({
  variants: {
    isActive: {
      true: sprinkles({ color: 'white' }),
      false: sprinkles({ color: 'gray_700' }),
    },
  },
})
