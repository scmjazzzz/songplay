import { useId } from 'react'
import { Input, type Props as InputProps } from '../input'
import { container, error, heading } from './text-field.css'

type Props = InputProps & {
  label?: string
  errorMessage?: string
}

export function TextField({ label, id, errorMessage, ...props }: Props) {
  const createdId = useId()
  const fieldId = id || `text-field-${createdId}`

  return (
    <div className={container}>
      {label && (
        <label htmlFor={fieldId} className={heading}>
          {label}
        </label>
      )}
      <Input id={fieldId} {...props} />
      {errorMessage && <span className={error}>{errorMessage}</span>}
    </div>
  )
}
