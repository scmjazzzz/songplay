export function conditionalValue<T>(condition: boolean, value: T, fullback?: T) {
  return condition ? value : fullback
}
