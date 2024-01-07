import {
  Chevron,
  L,
  U,
  I,
  Z,
  ILogoProps,
  letterSpacingMap,
  chevronSpacingMap,
} from '@/assets/LogoParts'

import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Logo = ({ size = 'xl' }: ILogoProps) => {
  const ctxWrapper = useRef(null)
  const tl = gsap.timeline({
    defaults: {
      y: 16,
      opacity: 0,
    },
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from('.logo_chevron', {
        delay: 0.5,
        duration: 1,
        ease: 'power4.out',
      }).from(
        '.letter',
        { duration: 1, stagger: 0.05, ease: 'elastic.out(0.75,0.65)' },
        '-=0.5',
      )
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ctxWrapper}
      className="flex items-center justify-center"
      style={{
        gap: chevronSpacingMap[size],
      }}
    >
      <Chevron className="logo_chevron" size={size} />
      <div
        className="relative flex items-end"
        style={{
          gap: letterSpacingMap[size],
        }}
      >
        <L className="letter" size={size} />
        <U className="letter" size={size} />
        <I className="letter" size={size} />
        <Z className="letter" size={size} />
      </div>
    </div>
  )
}

export default Logo
