import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IDropdownOption {
  label: string
  value: string
}

export interface IDropdownProps {
  icon?: IconDefinition
  options: IDropdownOption[]
  onChange?: (value: any) => void
  className?: string
  position?: 'left' | 'right'
  innerWidth?: string
}
