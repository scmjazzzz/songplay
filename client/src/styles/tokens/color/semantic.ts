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

const base = {
  light: {
    text_default: light.gray_900,
  },
  dark: {
    text_default: dark.gray_900,
  },
}

export const semantic = {
  light: {
    ...variant.light,
    ...paper.light,
    ...base.light,
  },
  dark: {
    ...variant.dark,
    ...paper.dark,
    ...base.dark,
  },
}
