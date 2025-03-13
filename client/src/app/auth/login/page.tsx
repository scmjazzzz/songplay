import { AdaptiveView } from '@/app/_components/view'
import MobileLoginPage from './mobile'
import DesktopLoginPage from './desktop'

export default async function LoginPage() {
  return <AdaptiveView mobile={<MobileLoginPage />} desktop={<DesktopLoginPage />} />
}
