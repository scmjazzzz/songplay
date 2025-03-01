import { MobileLayout } from '@/layouts/layout/mobile'
import { RegisterForm } from '@/domain/auth/components/form'

export default function MobileRegisterPage() {
  return (
    <MobileLayout mode="back-navigation" title="회원가입">
      <RegisterForm isMobile={true} />
    </MobileLayout>
  )
}
