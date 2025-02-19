type TransitionProperties = 'background-color' | 'border-color'
type TimingFunction = 'ease'

type CreateTransition = {
  properties: TransitionProperties | TransitionProperties[]
  duration: string
  timingFunction: TimingFunction
  delay?: string
}

export function createTransition({
  properties,
  duration,
  timingFunction,
  delay = '',
}: CreateTransition) {
  return `${properties} ${duration} ${timingFunction} ${delay}`
}
