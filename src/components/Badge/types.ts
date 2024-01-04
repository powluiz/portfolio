import { ReactNode } from 'react'

export interface IBadgeProps {
  name: string
  icon?: string | ReactNode
  textColor?: string
  badgeColor?: string
  className?: string
}
