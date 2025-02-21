'use client'

import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { useForm } from '@/shared/hooks/use-form'
import { registerSchema, type RegisterSchema } from '../../schemas/register'
import { AuthAction } from '../auth-action'

export function RegisterForm() {
  const { inputProps, disabled, errors, handleSubmit } = useForm<RegisterSchema>({
    form: {
      username: {
        validate: (username) => registerSchema.pick({ username: true }).safeParse({ username }).success,
        errorMessage: '8~16자 사이의 영문/숫자 입력해 주세요.',
      },
      password: {
        validate: (password) => registerSchema.pick({ password: true }).safeParse({ password }).success,
        errorMessage: '8~16자, 영문/숫자/특수문자 중 2가지 이상 입력해 주세요.',
      },
    },
  })

  const registerSubmit = handleSubmit({})

  return (
    <Form onSubmit={registerSubmit} footer={<AuthAction mode="register" disabled={disabled} />} sx={{ spacing: 'all' }}>
      <TextField
        label="아이디"
        placeholder="아이디를 입력해 주세요."
        autoComplete="off"
        errorMessage={errors.username}
        {...inputProps.username}
      />
      <TextField
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요."
        autoComplete="off"
        errorMessage={errors.password}
        {...inputProps.password}
      />
    </Form>
  )
}
