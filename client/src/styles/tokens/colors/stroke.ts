import { palette } from './palette'

const { light, dark } = palette

export const stroke = {
  light: {
    stroke_default: light.gray_500,
    stroke_danger: light.red_200,
    stroke_default_focus: light.gray_800,
  },
  dark: {
    stroke_default: dark.gray_500,
    stroke_danger: dark.red_100,
    stroke_default_focus: dark.gray_700,
  },
}
