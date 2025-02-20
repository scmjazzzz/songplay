import { useCallback, useMemo, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'

type ErrorsType<T> = Partial<Record<keyof T, string>>

type HandleSubmit<T> = {
  shouldPreventDefault?: boolean
  onSuccess?(data: Record<keyof T, string>, event: FormEvent<HTMLFormElement>): void
  onError?(errors: ErrorsType<T>, event: FormEvent<HTMLFormElement>): void
}

type Mode = 'all' | 'submit' | 'change' | 'blur'

type InputProps<T> = {
  name?: keyof T
  onChange?(event: ChangeEvent<HTMLInputElement>): void
  onBlur?(event: FocusEvent<HTMLInputElement>): void
}

type FormConfig = {
  validate?(text: string): boolean
  errorMessage?: string
}

type UseForm<T> = {
  mode?: Mode
  form: Record<keyof T, FormConfig>
}

export function useForm<T>({ mode = 'all', form }: UseForm<T>) {
  const [errors, setErrors] = useState<ErrorsType<T>>({})
  const errorRef = useRef<Partial<Record<keyof T, string | null>>>(errors)

  const handleError = (key: keyof T, isValid: boolean, errorMessage: string, errors: ErrorsType<T>) => {
    const newError = { ...errors }

    if (isValid) {
      delete newError[key]
    } else {
      newError[key] = errorMessage
    }

    return newError
  }

  const updateError = (key: keyof T, isValid: boolean, errorMessage: string) => {
    setErrors((prevError) => handleError(key, isValid, errorMessage, prevError))
  }

  const validateAndUpdateError = (key: keyof T, value: string, config: FormConfig) => {
    const isValid = !!config.validate?.(value)
    const errorMessage = isValid ? null : (config?.errorMessage ?? '')

    if (errorRef.current[key] === errorMessage) return
    errorRef.current[key] = errorMessage

    updateError(key, isValid, errorMessage ?? '')
  }

  const inputProps = useMemo(() => {
    const entries = Object.entries(form) as [keyof T, FormConfig][]
    const props = {} as Partial<Record<keyof T, InputProps<T>>>

    entries.forEach(([key, config]) => {
      props[key] = {
        onChange: (event) => {
          const modes: Mode[] = ['all', 'change']
          if (!modes.includes(mode)) return
          validateAndUpdateError(key, event.target.value, config)
        },
        onBlur: (event) => {
          const modes: Mode[] = ['all', 'blur']
          if (!modes.includes(mode)) return
          validateAndUpdateError(key, event.target.value, config)
        },
        name: key,
      } satisfies InputProps<T>
    })

    return props
  }, [])

  const handleSubmit = useCallback(({ onSuccess, onError, shouldPreventDefault = true }: HandleSubmit<T>) => {
    return (event: FormEvent<HTMLFormElement>) => {
      if (shouldPreventDefault) {
        event.preventDefault()
      }

      const formData = new FormData(event.currentTarget)
      const fromEntries = Object.fromEntries(formData) as Record<keyof T, string>
      const entries = Object.entries(fromEntries) as [keyof T, string][]

      const { isValid, errors } = entries.reduce(
        (acc, [key, value]) => {
          const config = form[key]
          const isValid = !!config?.validate?.(value)
          const errorMessage = isValid ? null : (config?.errorMessage ?? '')
          const newIsValid = acc.isValid && isValid
          const updatedErrors = handleError(key, isValid, errorMessage ?? '', acc.errors)

          errorRef.current[key] = errorMessage
          updateError(key, isValid, config?.errorMessage ?? '')

          return {
            isValid: newIsValid,
            errors: updatedErrors,
          }
        },
        { isValid: true, errors: {} as ErrorsType<T> },
      )

      if (isValid) {
        onSuccess?.(fromEntries, event)
      } else {
        onError?.(errors, event)
      }
    }
  }, [])

  const disabled = useMemo(() => {
    const keys = Object.keys(form) as (keyof T)[]
    const result = keys.some((item) => errorRef.current[item] !== null)

    return result
  }, [errors])

  return {
    inputProps,
    errors,
    disabled,
    handleSubmit,
  }
}
