import { MobileLayout } from '@/app/_components/layouts/layout/mobile'
import { LoginForm } from '@/domain/auth/components/form'

export default function MobileLoginPage() {
  return (
    <MobileLayout mode="bottom-navigation" title="로그인">
      <LoginForm isMobile={true} />
    </MobileLayout>
  )
}
