'use client'

import { Box } from '@/shared/components/box'
import { Form } from '@/shared/components/form'
import { TextField } from '@/shared/components/text-field'
import { AuthAction } from './auth-action'
import { useForm } from '@/shared/hooks/use-form'
import { loginSchema, type LoginSchema } from '../../schemas'
import { conditionalValue } from '@/shared/utils/conditional-value'
import { useRedirect } from '@/shared/hooks/use-redirect'
import { useLogin } from '../../hooks/use-login'

type Props = {
  isMobile: boolean
}

export function LoginForm({ isMobile }: Props) {
  const { inputProps, globalError, handleSubmit, setGlobalError } = useForm<LoginSchema>({
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

  const goNextPage = useRedirect()
  const { mutate, error, isPending, isSuccess } = useLogin()
  const loginSubmit = handleSubmit({
    onSuccess: (data) => {
      mutate(data, {
        onSuccess: () => goNextPage(),
      })
    },
    onError: () => setGlobalError(true),
  })

  return (
    <Form
      {...conditionalValue(isMobile, {
        sx: { padding: 12 },
        mode: 'full',
      })}
      onSubmit={loginSubmit}
      footer={
        <AuthAction
          mode="login"
          disabled={isPending || isSuccess}
          isLoading={isPending || isSuccess}
          errorMessage={conditionalValue(
            !!globalError || error?.statusCode === 401,
            '잘못된 사용자 이름 또는 비밀번호 입니다.',
          )}
        />
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <TextField
          label="아이디"
          placeholder="아이디를 입력해 주세요."
          autoComplete="off"
          disabled={isPending || isSuccess}
          {...inputProps.username}
        />
        <TextField
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
          disabled={isPending || isSuccess}
          {...inputProps.password}
        />
      </Box>
    </Form>
  )
}
