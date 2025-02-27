import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { border, space, typography } from '../tokens'
import { transformVariableName } from './utils'

const rootTokens = {
  space,
  border,
  typography,
}

export const rootVars = createGlobalThemeContract(rootTokens, (_, path) => transformVariableName(path))

createGlobalTheme(':root', rootVars, rootTokens)
