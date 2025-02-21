import { Button } from '@/shared/components/button'
import { Link } from '@/shared/components/link'
import { ROUTES } from '@/shared/constants/routes'
import { actions, description, error, link } from './auth-action.css'

type Props = {
  mode: 'register' | 'login'
  disabled?: boolean
  errorMessage?: string
}

const descriptionMap = {
  register: {
    actionName: '회원가입',
    question: '계정이 이미 있으신가요?',
    questionLink: ROUTES.LOGIN,
    questionLinkName: '로그인',
  },
  login: {
    actionName: '로그인',
    question: '계정이 없으신가요?',
    questionLink: ROUTES.REGISTER,
    questionLinkName: '회원가입',
  },
}

export function AuthAction({ mode, disabled, errorMessage }: Props) {
  const { actionName, question, questionLink, questionLinkName } = descriptionMap[mode]

  return (
    <div className={actions}>
      {errorMessage && <p className={error}>{errorMessage}</p>}
      <Button type="submit" disabled={disabled} mode="full" size="large">
        {actionName}
      </Button>
      <p className={description}>
        {question}
        <Link href={questionLink} className={link}>
          {questionLinkName}
        </Link>
      </p>
    </div>
  )
}
