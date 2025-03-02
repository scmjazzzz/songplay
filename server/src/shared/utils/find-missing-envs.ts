export function findMissingEnvs(envs: Record<string, string | number | undefined>) {
  return Object.entries(envs)
    .filter(([_, value]) => !value)
    .map(([key]) => key)
}
