import { isServerMobile } from '@/shared/utils/is-server-mobile'
import MobileRegisterPage from './mobile'
import DesktopRegisterPage from './desktop'

export default async function RegisterPage() {
  const isMobile = await isServerMobile()

  return isMobile ? <MobileRegisterPage /> : <DesktopRegisterPage />
}
