import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children: React.ReactNode
}
