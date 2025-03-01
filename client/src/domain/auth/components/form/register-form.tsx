import { Box } from '@/shared/components/box'
import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { AuthAction } from './auth-action'

type Props = {
  mode?: 'full'
}

export function RegisterForm({ mode }: Props) {
  return (
    <Form mode={mode} footer={<AuthAction mode="register" />} sx={{ padding: 12 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TextField label="아이디" placeholder="아이디를 입력해 주세요." autoComplete="off" />
        <TextField type="password" label="비밀번호" placeholder="비밀번호를 입력해 주세요." autoComplete="off" />
      </Box>
    </Form>
  )
}
