import { style } from '@vanilla-extract/css'

export const blind = style({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
})
