export function transformVariableName(path: string[]) {
  return path.join('-').replaceAll('_', '-')
}
