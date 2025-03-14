'use client'

import { Box } from '@/shared/components/box'
import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { AuthAction } from './auth-action'
import { useForm } from '@/shared/hooks/use-form'
import { conditionalValue } from '@/shared/utils/conditional-value'
import { useRedirect } from '@/shared/hooks/use-redirect'
import { registerSchema, type RegisterSchema } from '../../schemas'
import { useRegister } from '../../hooks/use-register'

type Props = {
  isMobile: boolean
}

const authError = {
  409: '이미 존재하는 계정입니다.',
} as const

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

  const goNextPage = useRedirect()
  const { mutate, error, isPending, isSuccess } = useRegister()

  const registerSubmit = handleSubmit({
    onSuccess: (data) => {
      mutate(data, {
        onSuccess: () => goNextPage(),
      })
    },
  })

  return (
    <Form
      {...conditionalValue(isMobile, {
        sx: { padding: 12 },
        mode: 'full',
      })}
      onSubmit={registerSubmit}
      footer={
        <AuthAction
          mode="register"
          disabled={disabled || isPending || isSuccess}
          isLoading={isPending || isSuccess}
          errorMessage={conditionalValue(error?.statusCode === 409, authError[409])}
        />
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TextField
          label="아이디"
          placeholder="아이디를 입력해 주세요."
          autoComplete="off"
          errorMessage={errors.username}
          disabled={isPending || isSuccess}
          {...inputProps.username}
        />
        <TextField
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
          errorMessage={errors.password}
          disabled={isPending || isSuccess}
          {...inputProps.password}
        />
      </Box>
    </Form>
  )
}
