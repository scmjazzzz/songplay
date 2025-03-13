'use client'

import { Box } from '@/shared/components/box'
import { TextField } from '@/shared/components/text-field'
import { Form } from '@/shared/components/form'
import { AuthAction } from './auth-action'
import { useForm } from '@/shared/hooks/use-form'
import { conditionalValue } from '@/shared/utils/conditional-value'
import { loginSchema, type LoginSchema } from '../../schemas'

type Props = {
  isMobile: boolean
}

export function LoginForm({ isMobile }: Props) {
  const { inputProps, handleSubmit } = useForm<LoginSchema>({
    mode: 'submit',
    form: {
      username: {
        validate: (username) => loginSchema.pick({ username: true }).safeParse({ username }).success,
      },
      password: {
        validate: (password) => loginSchema.pick({ password: true }).safeParse({ password }).success,
      },
    },
  })

  const loginSubmit = handleSubmit({})

  return (
    <Form
      {...conditionalValue(isMobile, {
        sx: { padding: 12 },
        mode: 'full',
      })}
      onSubmit={loginSubmit}
      footer={<AuthAction mode="login" />}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TextField label="아이디" placeholder="아이디를 입력해 주세요." autoComplete="off" {...inputProps.username} />
        <TextField
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
          {...inputProps.password}
        />
      </Box>
    </Form>
  )
}
