'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from '@/components/icon'
import { button, svg } from './header-back-button.css'

export function HeaderBackButton() {
  const { back } = useRouter()

  return (
    <button onClick={back} className={button} aria-label="뒤로 이동하기">
      <ArrowLeft className={svg} />
    </button>
  )
}
