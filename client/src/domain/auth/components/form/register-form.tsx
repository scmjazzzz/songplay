'use client'

import { Box } from '@/shared/components/box'
import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { AuthAction } from './auth-action'
import { useForm } from '@/shared/hooks/use-form'
import { conditionalValue } from '@/shared/utils/conditional-value'
import { registerSchema, type RegisterSchema } from '../../schemas'

type Props = {
  isMobile: boolean
}

export function RegisterForm({ isMobile }: Props) {
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
    <Form
      {...conditionalValue(isMobile, {
        sx: { padding: 12 },
        mode: 'full',
      })}
      onSubmit={registerSubmit}
      footer={<AuthAction mode="register" disabled={disabled} />}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
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
    </Form>
  )
}
