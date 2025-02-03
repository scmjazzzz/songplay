import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { palette, semantic } from '../tokens'
import { transformVariableName } from '../utils'

const color = (mode: 'light' | 'dark') => ({
  color: { ...palette[mode], ...semantic[mode] },
})

export const colorVars = createGlobalThemeContract(color('light'), (_, path) => transformVariableName(path))

createGlobalTheme('[data-mode="light"]', colorVars, color('light'))
createGlobalTheme('[data-mode="dark"]', colorVars, color('dark'))
