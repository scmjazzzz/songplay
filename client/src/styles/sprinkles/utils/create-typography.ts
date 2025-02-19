import { typography } from '@/styles/tokens'

const { font_size, font_weight, line_height } = typography

type CreateTypography = {
  size: keyof typeof font_size
  weight: keyof typeof font_weight
  lineHeight: keyof typeof line_height
}

export function createTypography({ size, weight, lineHeight }: CreateTypography) {
  return {
    fontSize: font_size[size],
    fontWeight: font_weight[weight],
    lineHeight: line_height[lineHeight],
  }
}
