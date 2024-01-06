import { Chevron, L, U, I, Z } from '@/assets/LogoParts'

import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Logo = () => {
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
    <div ref={ctxWrapper} className="flex items-center justify-center gap-3">
      <Chevron className="logo_chevron" />
      <div className="relative flex items-end gap-1">
        <L className="letter" />
        <U className="letter" />
        <I className="letter" />
        <Z className="letter" />
      </div>
    </div>
  )
}

export default Logo
