export function conditionalProps<T>(condition: boolean, props: T) {
  return condition ? props : {}
}
