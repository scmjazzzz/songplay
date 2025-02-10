import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { transformVariableName } from '../utils'
import { border, space, typography, base } from '../tokens'

const rootTokens = {
  ...base,
  space,
  border,
  typography,
}

export const rootVars = createGlobalThemeContract(rootTokens, (_, path) => transformVariableName(path))

createGlobalTheme(':root', rootVars, rootTokens)
