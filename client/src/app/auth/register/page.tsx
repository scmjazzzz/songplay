import { AdaptiveView } from '@/app/_components/view'
import MobileRegisterPage from './mobile'
import DesktopRegisterPage from './desktop'

export default async function RegisterPage() {
  return <AdaptiveView mobile={<MobileRegisterPage />} desktop={<DesktopRegisterPage />} />
}
