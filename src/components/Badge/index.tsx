import { twMerge } from 'tailwind-merge'
import { IBadgeProps } from './types'
import React from 'react'

export interface IIconProps {
  size?: string
}

const Badge = ({
  name,
  icon,
  textColor = 'white',
  badgeColor = '#7547FF',
  className,
}: IBadgeProps) => {
  const iconSize = '1.65rem'

  // Used style prop because tailwind doesn't support dynamic colors
  return (
    <div className="has-tooltip">
      <div
        className={twMerge(
          'group relative flex size-16 cursor-pointer select-none items-center justify-center gap-4 rounded-full transition-all duration-[125ms] ease-in-out hover:scale-110 active:scale-95',
          className,
        )}
        style={{
          background: badgeColor,
          color: textColor,
        }}
      >
        {icon && React.isValidElement(icon) && (
          <div>
            {React.cloneElement(icon, {
              size: iconSize,
              className: 'group-hover:animate-spin-slow',
            } as IIconProps)}
          </div>
        )}

        <span className="tooltip top-[-2.5rem] w-fit text-nowrap rounded-full bg-neutral-black px-3 py-1 text-neutral-white shadow-lg">
          {name}
        </span>
      </div>
    </div>
  )
}

export default Badge
