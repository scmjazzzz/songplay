import { defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '@/styles/vars.css'

export const statusProperties = defineProperties({
  conditions: {
    default: {},
    hover: { '@media': '(hover: hover)', selector: '&:not(:disabled):hover' },
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
    fill: vars.color,
  },
})
