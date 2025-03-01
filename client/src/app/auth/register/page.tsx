import { isServerMobile } from '@/shared/utils'
import MobileRegisterPage from './mobile'
import DesktopRegisterPage from './desktop'

export default async function RegisterPage() {
  const isMobile = await isServerMobile()

  return isMobile ? <MobileRegisterPage /> : <DesktopRegisterPage />
}
