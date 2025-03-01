import { isServerMobile } from '@/shared/utils/is-server-mobile'
import MobileLoginPage from './mobile'
import DesktopLoginPage from './desktop'

export default async function LoginPage() {
  const isMobile = await isServerMobile()

  return isMobile ? <MobileLoginPage /> : <DesktopLoginPage />
}
