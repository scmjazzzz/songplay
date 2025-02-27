import { palette } from './palette'

const { light, dark } = palette

const variant = {
  light: {
    primary: light.orange_500,
    danger: light.red_500,
  },
  dark: {
    primary: dark.orange_500,
    danger: dark.red_300,
  },
}

const base = {
  light: {
    default_background: light.gray_00,
  },
  dark: {
    default_background: dark.gray_200,
  },
}

export const semantic = {
  light: {
    ...variant.light,
    ...base.light,
  },
  dark: {
    ...variant.dark,
    ...base.dark,
  },
}
