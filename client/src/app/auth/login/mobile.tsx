import { MobileLayout } from '@/layouts/layout/mobile'
import { LoginForm } from '@/domain/auth/components/form'

export default function MobileLoginPage() {
  return (
    <MobileLayout mode="back-navigation" title="로그인">
      <LoginForm mode="full" />
    </MobileLayout>
  )
}
