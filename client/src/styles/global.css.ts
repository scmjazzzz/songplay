import { globalStyle } from '@vanilla-extract/css'
import { vars } from './vars.css'

globalStyle('html', {
  fontFamily: `${vars.typography.font_family.roboto}, ${vars.typography.font_family.noto_sans_kr}, sans-serif`,
})

globalStyle('html, body', {
  backgroundColor: vars.color.paper_default,
})
