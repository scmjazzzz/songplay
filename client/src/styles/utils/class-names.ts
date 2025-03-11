export function classNames(...classes: (string | undefined)[]) {
  const result = classes.filter(Boolean).join(' ')
  return result || undefined
}
