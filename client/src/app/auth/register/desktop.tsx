import { DesktopLayout } from '@/app/_components/layouts/layout/dekstop'
import { Container } from '@/shared/components/container'
import { RegisterForm } from '@/domain/auth/components/form'

export default function DesktopRegisterPage() {
  return (
    <DesktopLayout title="회원가입">
      <Container variant="maxWidthForm" align="center" justify="center">
        <RegisterForm isMobile={false} />
      </Container>
    </DesktopLayout>
  )
}
