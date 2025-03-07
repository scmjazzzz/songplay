import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/styles/sprinkles'
import { vars } from '@/styles/vars.css'

export const container = style([
  sprinkles({
    display: 'flex',
    backgroundColor: 'background_base',
  }),
  {
    gap: vars.base.desktop_layout_gap,
  },
])

export const aside = style([
  sprinkles({
    position: 'sticky',
    top: 0,
    height: 'screen',
    backgroundColor: 'background_default',
  }),
  {
    minWidth: vars.base.desktop_aside_width,
  },
])

export const main = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  backgroundColor: 'gray_100',
})

export const head = style([
  sprinkles({
    position: 'sticky',
    top: 0,
    verticalPadding: 38,
    horizontalPadding: 62,
    backgroundColor: 'background_default',
  }),
  {
    borderBottom: `${vars.base.desktop_layout_gap} solid ${vars.color.gray_100}`,
  },
])

export const content = style([
  sprinkles({
    flex: 1,
    paddingTop: 34,
    horizontalPadding: 62,
    backgroundColor: 'background_default',
  }),
  {
    paddingBottom: `calc(${vars.base.desktop_layout_gap} + ${vars.base.desktop_global_audio_player_height} + 62px)`,
  },
])

export const footer = style([
  sprinkles({
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: 'full',
    backgroundColor: 'background_base',
  }),
  {
    paddingTop: vars.base.desktop_layout_gap,
  },
])
