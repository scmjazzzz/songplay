import { palette } from './palette'

const { light, dark } = palette

export const background = {
  light: {
    background_primary: light.orange_600,
    background_primary_hover: light.orange_700,
    background_primary_disabled: light.orange_500,
    background_danger: light.red_700,
    background_base: light.gray_200,
    background_default: light.gray_00,
  },
  dark: {
    background_primary: dark.orange_700,
    background_primary_hover: dark.orange_600,
    background_primary_disabled: dark.orange_500,
    background_danger: dark.red_600,
    background_base: dark.gray_00,
    background_default: dark.gray_300,
  },
}
