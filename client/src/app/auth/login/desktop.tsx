import { DesktopLayout } from '@/app/_components/layouts/layout/dekstop'
import { Container } from '@/shared/components/container'
import { LoginForm } from '@/domain/auth/components/form'

export default function DesktopLoginPage() {
  return (
    <DesktopLayout title="로그인">
      <Container variant="maxWidthForm" align="center" justify="center">
        <LoginForm isMobile={false} />
      </Container>
    </DesktopLayout>
  )
}
