'use client'

import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { useForm } from '@/shared/hooks/use-form'
import { AuthAction } from '../auth-action'
import { loginSchema, type LoginSchema } from '../../schemas/login'

export function LoginForm() {
  const { inputProps, handleSubmit } = useForm<LoginSchema>({
    form: {
      username: {
        validate: (username) => loginSchema.pick({ username: true }).safeParse({ username }).success,
      },
      password: {
        validate: (password) => loginSchema.pick({ password: true }).safeParse({ password }).success,
      },
    },
  })

  const registerSubmit = handleSubmit({})

  return (
    <Form onSubmit={registerSubmit} footer={<AuthAction mode="login" />} sx={{ spacing: 'all' }}>
      <TextField label="아이디" placeholder="아이디를 입력해 주세요." autoComplete="off" {...inputProps.username} />
      <TextField
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요."
        autoComplete="off"
        {...inputProps.password}
      />
    </Form>
  )
}
