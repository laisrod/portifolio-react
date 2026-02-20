import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'

interface UseFormOptions<T> {
  initialValues: T
  onSubmit: (values: T) => void
}

/**
 * Lightweight form-state hook.
 * Manages field values, a change handler factory, and submit logic.
 */
export function useForm<T extends Record<string, string>>({
  initialValues,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof T) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(values)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return { values, handleChange, handleSubmit, submitted } as const
}
