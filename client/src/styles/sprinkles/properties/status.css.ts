import { defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '@/styles/vars.css'

export const statusProperties = defineProperties({
  conditions: {
    default: {},
    hover: { '@media': '(hover: hover)', selector: '&:hover' },
    placeholder: { selector: '&::placeholder' },
    disabled: { selector: '&:disabled' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
    fill: vars.color,
  },
})
