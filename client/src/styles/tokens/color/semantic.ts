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

const status = {
  light: {
    primary_hover: light.orange_700,
    default_after_primary_hover: light.orange_50,
    default_placeholder: light.gray_500,
    default_disabled: light.gray_100,
    default_border_focus: light.gray_900,
  },
  dark: {
    primary_hover: dark.orange_400,
    default_after_primary_hover: dark.orange_alpha_100,
    default_placeholder: dark.gray_600,
    default_disabled: dark.gray_100,
    default_border_focus: dark.gray_600,
  },
}

const base = {
  light: {
    default_text: light.gray_900,
    default_border: light.gray_400,
    default_background: light.gray_00,
    primary_background: light.orange_500,
    danger_border: light.red_300,
    danger_background: light.red_alpha_100,
  },
  dark: {
    default_text: dark.gray_900,
    default_border: dark.gray_400,
    default_background: dark.gray_200,
    primary_background: dark.orange_500,
    danger_border: dark.red_100,
    danger_background: dark.red_alpha_100,
  },
}

export const semantic = {
  light: {
    ...variant.light,
    ...base.light,
    ...status.light,
  },
  dark: {
    ...variant.dark,
    ...base.dark,
    ...status.dark,
  },
}
