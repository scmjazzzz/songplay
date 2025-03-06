import { palette } from './palette'

const { light, dark } = palette

export const foreground = {
  light: {
    foreground_primary: light.orange_600,
    foreground_danger: light.red_700,
  },
  dark: {
    foreground_primary: dark.orange_700,
    foreground_danger: dark.red_700,
  },
}
