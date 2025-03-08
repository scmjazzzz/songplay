import { MobileLayout } from '@/app/_components/layouts/layout/mobile'
import { RegisterForm } from '@/domain/auth/components/form'

export default function MobileRegisterPage() {
  return (
    <MobileLayout mode="bottom-navigation" title="회원가입">
      <RegisterForm isMobile={true} />
    </MobileLayout>
  )
}
