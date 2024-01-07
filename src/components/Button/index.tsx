import { twMerge } from 'tailwind-merge'
import { IButtonProps } from './types'

function Button({
  variant = 'primary',
  disabled,
  children,
  className,
  ref,
  ...rest
}: IButtonProps) {
  return (
    <button
      ref={ref}
      data-variant={variant}
      data-disabled={disabled}
      disabled={disabled}
      className={twMerge(
        'flex min-h-fit min-w-fit items-center justify-center rounded-xl bg-primary-low px-4 py-3 text-base font-normal text-neutral-white outline-2 data-[disabled=true]:bg-slate-300 data-[variant=secondary]:bg-neutral-transparent data-[variant=secondary]:text-primary-low data-[variant=secondary]:outline md:text-xl',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
