import { Icon } from '..'
import { IDropdownOption, IDropdownProps } from './types'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import gsap from 'gsap'
import ReactDOM from 'react-dom'

const Dropdown = ({
  options,
  initialValue,
  onChange,
  className,
  innerWidth,
  position,
  icon,
}: IDropdownProps) => {
  const [activeOption, setActiveOption] = useState<IDropdownOption>(
    initialValue || {
      label: '',
      value: '',
    },
  )

  const [isOpen, setIsOpen] = useState(false)
  const innerRef = useRef(null)
  const dropdownWrapper = useRef<any>(null)
  const [side, setSide] = useState<'left' | 'right'>(position || 'left')

  const tl = useRef<any>()

  useEffect(() => {
    if (initialValue) {
      setActiveOption(initialValue)
    }
  }, [initialValue])

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    })

    tl.current.to(innerRef.current, {
      ease: 'power2.inOut',
      duration: 0.2,
      opacity: 1,
      y: 16,
    })
  }, [])

  useEffect(() => {
    isOpen ? tl.current.play() : tl.current.reverse()
  }, [isOpen])

  useEffect(() => {
    // check if dropdown is out of screen
    const checkBoundaries = () => {
      const nodeRef = ReactDOM.findDOMNode(innerRef?.current)
      const distanceFromLeft =
        (nodeRef as Element)?.getBoundingClientRect()?.x +
        (nodeRef as Element)?.getBoundingClientRect()?.width

      if (window.innerWidth - distanceFromLeft <= 0) {
        setSide('right')
      }
    }

    // check for outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownWrapper.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    checkBoundaries()

    window.addEventListener('resize', checkBoundaries)
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('resize', checkBoundaries)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleChange = (option: IDropdownOption) => {
    setActiveOption(option)
    handleButtonClick()
    if (onChange) {
      onChange(option)
    }
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={dropdownWrapper} className={twMerge('relative', className)}>
      <button
        className="flex w-full items-center justify-center gap-2 rounded-md border-[1px] border-transparent bg-transparent px-4 py-3 transition-all duration-100 ease-in-out focus:border-primary-low [&>*:not(:first-child)]:hidden lg:[&>*:not(:first-child)]:flex"
        onClick={() => {
          handleButtonClick()
        }}
      >
        {icon && <Icon icon={icon} size="sm" />}
        <h3 className="text-base font-medium">{activeOption?.label}</h3>
      </button>

      <div
        ref={innerRef}
        id="dropdown_content"
        className={twMerge(
          'absolute top-[80%] w-[10rem] min-w-fit flex-col opacity-0 drop-shadow-lg',
          innerWidth,
        )}
        style={{
          ...(!isOpen && { pointerEvents: 'none' }),
          ...(side === 'right' ? { right: 0 } : { left: 0 }),
        }}
      >
        {options?.map((option, index) => (
          <button
            key={`dropdown-item-${index}`}
            className="border-gray-3 00 w-full min-w-fit border-b-[1px] bg-neutral-white px-4 py-3 text-left font-medium text-primary-low transition-all duration-100 ease-in-out first-of-type:rounded-t-xl last-of-type:rounded-b-xl last-of-type:border-none hover:bg-gray-100"
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
