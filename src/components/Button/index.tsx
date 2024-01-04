import { twMerge } from 'tailwind-merge'
import { IButtonProps } from './types'

function Button({
  variant = 'primary',
  disabled,
  children,
  className,
  ...rest
}: IButtonProps) {
  return (
    <button
      data-variant={variant}
      disabled={disabled}
      className={twMerge(
        'rounded-xl bg-primary-low px-4 py-3 text-base font-normal text-neutral-white outline-2 data-[variant=secondary]:bg-neutral-transparent data-[variant=secondary]:text-primary-low data-[variant=secondary]:outline md:text-xl',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
