'use client'

import { Form } from '@/shared/components/form'
import { Box } from '@/shared/components/box'
import { TextField } from '@/shared/components/text-field'
import { useForm } from '@/shared/hooks/use-form'
import { registerSchema, type RegisterSchema } from '../../schemas/register'
import { AuthAction } from '../auth-action'
import type { Sprinkles } from '@/styles/sprinkles'

type Props = {
  sx?: Sprinkles
}

export function RegisterForm({ sx }: Props) {
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
    <Form onSubmit={registerSubmit} sx={sx}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
      </Box>
      <AuthAction mode="register" disabled={disabled} />
    </Form>
  )
}
