import { defineProperties } from '@vanilla-extract/sprinkles'
import { createTypography, media } from '@/styles/utils'
import { vars } from '@/styles/vars.css'

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': media.tablet },
    desktop: { '@media': media.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'sticky'],
    display: ['flex'],
    alignItems: ['center'],
    justifyContent: ['center'],
    overflow: ['hidden'],
    width: {
      full: '100%',
    },
    height: {
      full: '100%',
    },
    typography: {
      heading1: createTypography({ size: 26, lineHeight: 'large', weight: 'bold' }),
      heading2: createTypography({ size: 24, lineHeight: 'large', weight: 'bold' }),
      heading3: createTypography({ size: 22, lineHeight: 'large', weight: 'bold' }),
      heading4: createTypography({ size: 20, lineHeight: 'medium', weight: 'bold' }),
    },
    gap: vars.space,
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    borderWidth: vars.border.border_width,
    borderRadius: vars.border.border_radius,
    fontSize: vars.typography.font_size,
    fontWeight: vars.typography.font_weight,
    lineHeight: vars.typography.line_height,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    horizontalPadding: ['paddingLeft', 'paddingRight'],
    verticalPadding: ['paddingTop', 'paddingBottom'],
    horizontalMargin: ['marginLeft', 'marginRight'],
    verticalMargin: ['marginTop', 'marginBottom'],
  },
})
