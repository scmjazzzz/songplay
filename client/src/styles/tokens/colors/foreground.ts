import { palette } from './palette'

const { light, dark } = palette

export const foreground = {
  light: {
    foreground_default: light.gray_900,
    foreground_primary: light.orange_600,
    foreground_danger: light.red_700,
    foreground_default_placeholder: light.gray_600,
  },
  dark: {
    foreground_default: dark.gray_900,
    foreground_primary: dark.orange_700,
    foreground_danger: dark.red_700,
    foreground_default_placeholder: dark.gray_600,
  },
}
