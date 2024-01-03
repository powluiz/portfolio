export interface INavLink {
  isInternal?: boolean
  label: string
  to: string
}

export interface INavbarProps {
  links: INavLink[]
  showLangSelector?: boolean
}
