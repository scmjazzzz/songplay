'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from '@/shared/ui/icon'
import { button, iconSvg } from './header-back-button.css'

export function HeaderBackButton() {
  const { back } = useRouter()

  return (
    <button onClick={back} className={button}>
      <ArrowLeft className={iconSvg} />
    </button>
  )
}
