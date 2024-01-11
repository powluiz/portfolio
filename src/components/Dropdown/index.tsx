import { Icon } from '..'
import { IDropdownOption, IDropdownProps } from './types'
import { useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import gsap from 'gsap'
import ReactDOM from 'react-dom'

const Dropdown = ({
  options,
  onChange,
  className,
  innerWidth,
  position,
  icon,
}: IDropdownProps) => {
  const [activeOption, setActiveOption] = useState<IDropdownOption>(options[0])
  const [isOpen, setIsOpen] = useState(false)
  const innerRef = useRef(null)
  const [side, setSide] = useState<'left' | 'right'>(position || 'left')

  const ctxWrapper = useRef<any>(null)
  const tl = gsap.timeline({
    defaults: {
      y: -16,
      opacity: 0,
      display: 'none',
      duration: 0.5,
    },
    paused: true,
  })

  useLayoutEffect(() => {
    const nodeRef = ReactDOM.findDOMNode(innerRef?.current)
    const distanceFromLeft =
      (nodeRef as Element)?.getBoundingClientRect()?.x +
      (nodeRef as Element)?.getBoundingClientRect()?.width

    if (window.innerWidth - distanceFromLeft <= 0) {
      setSide('right')
    }

    let ctx = gsap.context(() => {
      tl.from('#dropdown_content', {
        ease: 'power4.out',
        onComplete: () => {
          tl.pause()
        },
      }).to('#dropdown_content', {
        ease: 'power4.in',
        onComplete: () => {
          tl.restart()
          tl.pause()
        },
      })

      if (isOpen) {
        tl.play()
      } else {
        tl.reverse()
      }
    }, ctxWrapper)

    return () => ctx.revert()
  }, [isOpen])

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ctxWrapper.current &&
        !ctxWrapper.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = (option: IDropdownOption) => {
    setActiveOption(option)
    setIsOpen(false)
    if (onChange) {
      onChange(option)
    }
  }

  return (
    <div ref={ctxWrapper} className={twMerge('relative', className)}>
      <button
        className="flex w-full items-center justify-center gap-2 rounded-md border-[1px] border-transparent bg-transparent px-4 py-3 transition-all duration-100 ease-in-out focus:border-primary-low [&>*:not(:first-child)]:hidden lg:[&>*:not(:first-child)]:flex"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {icon && <Icon icon={icon} size="sm" />}
        <h3 className="text-base font-medium">{activeOption?.label}</h3>
      </button>

      <div
        ref={innerRef}
        id="dropdown_content"
        className={twMerge(
          'absolute  top-[120%] flex w-[10rem] min-w-fit flex-col shadow-lg',
          innerWidth,
        )}
        style={side === 'right' ? { right: 0 } : { left: 0 }}
      >
        {options?.map((option, index) => (
          <button
            key={`dropdown-item-${index}`}
            className="border-gray-3 00 w-full min-w-fit border-b-[1px] bg-neutral-white px-4 py-3 text-left font-medium text-primary-low transition-all duration-100 ease-in-out first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-none hover:bg-gray-100"
            onClick={() => handleChange(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
