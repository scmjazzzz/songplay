import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { palette, foreground, background, stroke } from '../tokens'
import { transformVariableName } from './utils'

const color = (mode: 'light' | 'dark') => ({
  color: { ...palette[mode], ...foreground[mode], ...background[mode], ...stroke[mode] },
})

export const colorVars = createGlobalThemeContract(color('light'), (_, path) => transformVariableName(path))

createGlobalTheme('[data-theme="light"]', colorVars, color('light'))
createGlobalTheme('[data-theme="dark"]', colorVars, color('dark'))
