import { isServerMobile } from '@/shared/utils/is-server-mobile'

type Props = {
  desktop: React.ReactNode
  mobile: React.ReactNode
}

export async function AdaptiveView({ desktop, mobile }: Props) {
  const isMobile = await isServerMobile()

  return isMobile ? mobile : desktop
}
