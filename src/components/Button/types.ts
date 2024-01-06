import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children: React.ReactNode
  className?: string
}
