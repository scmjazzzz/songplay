/**
 * Original work Copyright Danggeun Market Inc.
 * Modified work Copyright 2025 songplay
 *
 * Licensed under the Apache License, Version 2.0
 * Modified: Customized color palette based on our design system
 */

import { palette } from './palette'

const { light, dark } = palette

const variant = {
  light: {
    primary: light.orange_500,
    secondary: light.gray_900,
    success: light.green_500,
    accent: light.blue_500,
    warning: light.yellow_400,
    danger: light.red_500,
  },
  dark: {
    primary: dark.orange_500,
    secondary: dark.gray_900,
    success: dark.green_500,
    accent: dark.blue_500,
    warning: dark.yellow_700,
    danger: dark.red_300,
  },
}

const paper = {
  light: {
    paper_sheet: light.gray_00,
    paper_dialog: light.gray_00,
    paper_floating: light.gray_00,
    paper_contents: light.gray_50,
    paper_background: light.gray_100,
    paper_accent: light.orange_50,
    paper_default: light.gray_00,
  },
  dark: {
    paper_sheet: dark.gray_50,
    paper_dialog: dark.gray_100,
    paper_floating: dark.gray_100,
    paper_contents: dark.gray_00,
    paper_background: dark.gray_00,
    paper_accent: dark.gray_100,
    paper_default: dark.gray_50,
  },
}

const status = {
  light: {
    primary_hover: light.orange_700,
    primary_disabled: light.orange_400,
    default_after_primary_hover: light.orange_50,
    default_placeholder: light.gray_500,
    default_disabled: light.gray_100,
    default_border_focus: light.gray_900,
  },
  dark: {
    primary_hover: dark.orange_400,
    primary_disabled: dark.orange_200,
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
    danger_border: light.red_300,
    danger_background: light.red_alpha_100,
    primary_background: light.orange_500,
  },
  dark: {
    default_text: dark.gray_900,
    default_border: dark.gray_400,
    danger_border: dark.red_100,
    danger_background: dark.red_alpha_100,
    primary_background: dark.orange_500,
  },
}

export const semantic = {
  light: {
    ...variant.light,
    ...paper.light,
    ...status.light,
    ...base.light,
  },
  dark: {
    ...variant.dark,
    ...paper.dark,
    ...status.dark,
    ...base.dark,
  },
}
