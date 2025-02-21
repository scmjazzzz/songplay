import { defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '@/styles/vars.css'
import { media } from '@/styles/utils'
import { createTransition, createTypography } from '../utils'

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': media.tablet },
    desktop: { '@media': media.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['flex'],
    flexDirection: ['column'],
    alignItems: ['center'],
    justifyContent: ['center', 'space-between'],
    justifySelf: ['center'],
    flex: [1],
    position: ['sticky', 'absolute'],
    width: {
      full: '100%',
    },
    height: {
      full: '100%',
      inherit: 'inherit',
    },
    maxWidth: {
      form: '500px',
    },
    minHeight: {
      screen: '100vh',
    },
    textAlign: ['center'],
    textDecoration: ['underline'],
    borderStyle: ['solid'],
    transition: {
      backgroundColor: createTransition({
        properties: 'background-color',
        duration: '.15s',
        timingFunction: 'ease',
      }),
      borderColor: createTransition({
        properties: 'border-color',
        duration: '.15s',
        timingFunction: 'ease',
      }),
      backgroundAndBorderColor: createTransition({
        properties: ['background-color', 'border-color'],
        duration: '.15s',
        timingFunction: 'ease',
      }),
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
    spacing: {
      all: { paddingTop: 12, paddingLeft: 12, paddingRight: 12, paddingBottom: 30 },
    },
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
