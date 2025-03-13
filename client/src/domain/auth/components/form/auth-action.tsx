import { Text } from '@/shared/components/text'
import { Button } from '@/shared/components/button'
import { Link } from '@/shared/components/link'
import { ROUTES } from '@/shared/constants/routes'
import { actions, link } from './auth-action.css'

type Props = {
  mode: 'register' | 'login'
  disabled?: boolean
  errorMessage?: string
  isLoading?: boolean
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

export function AuthAction({ mode, disabled, errorMessage, isLoading }: Props) {
  const { actionName, question, questionLink, questionLinkName } = descriptionMap[mode]

  return (
    <div className={actions}>
      {errorMessage && (
        <Text variant="textRegular3" align="center" color="danger" sx={{ paddingBottom: 10 }}>
          {errorMessage}
        </Text>
      )}
      <Button type="submit" disabled={disabled} mode="full" size="large" isLoading={isLoading}>
        {actionName}
      </Button>
      <Text variant="textRegular3" color="default" align="center" sx={{ paddingTop: 20 }}>
        {question}
        <Link href={questionLink} className={link}>
          {questionLinkName}
        </Link>
      </Text>
    </div>
  )
}
