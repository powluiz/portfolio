import { IButtonProps } from './types'

function Button({
  variant = 'primary',
  disabled,
  children,
  ...rest
}: IButtonProps) {
  return (
    <button
      data-variant={variant}
      disabled={disabled}
      className="rounded-xl bg-primary-low px-4 py-3 text-xl font-normal text-neutral-white outline-2 data-[variant=secondary]:bg-neutral-transparent data-[variant=secondary]:text-primary-low data-[variant=secondary]:outline"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
