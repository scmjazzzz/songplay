import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { border, space, typography, base } from '../tokens'
import { transformVariableName } from './utils'

const rootTokens = {
  base,
  space,
  border,
  typography,
}

export const rootVars = createGlobalThemeContract(rootTokens, (_, path) => transformVariableName(path))

createGlobalTheme(':root', rootVars, rootTokens)
