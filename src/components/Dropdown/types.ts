export interface IDropdownOption {
  label: string
  value: string
}

export interface IDropdownProps {
  options: IDropdownOption[]
  onChange?: (value: any) => void
  className?: string
}
