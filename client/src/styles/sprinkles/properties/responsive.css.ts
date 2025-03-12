import { defineProperties } from '@vanilla-extract/sprinkles'
import { media } from '@/styles/utils'
import { vars } from '@/styles/vars.css'

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': media.tablet },
    desktop: { '@media': media.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['fixed', 'absolute', 'sticky'],
    display: ['flex'],
    alignItems: ['center'],
    justifyContent: ['center'],
    flexDirection: ['column'],
    flex: [1],
    width: {
      full: '100%',
      screen: '100vw',
    },
    height: {
      full: '100%',
      screen: '100vh',
    },
    textAlign: ['left', 'center', 'right'],
    borderStyle: ['solid'],
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
