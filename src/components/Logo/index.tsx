import { Chevron, L, U, I, Z } from '@/assets/LogoParts'

import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Logo = () => {
  const ctxWrapper = useRef(null)
  const classList = ['logo_chevron', 'logo_L', 'logo_U', 'logo_I', 'logo_Z']
  const delay = 0.5

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      classList?.map(classItem => {
        gsap.from(`.${classItem}`, {
          y: 16,
          duration: 1,
          ease: 'back.out',
          delay: delay,
        })

        gsap.from(`.${classItem}`, {
          opacity: 0,
          duration: 1.25,
          delay: delay,
          ease: 'back.out',
        })
      })
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  // const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   gsap.to(e.target, { scale: 1.2 })
  // }

  // const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   gsap.to(e.target, { scale: 1 })
  // }

  return (
    <div ref={ctxWrapper} className="flex items-center justify-center gap-3">
      <Chevron className="logo_chevron" />
      <div className="relative flex items-end gap-1">
        <L className="logo_L" />
        <U className="logo_U" />
        <I className="logo_I" />
        <Z className="logo_Z" />
      </div>
    </div>
  )
}

export default Logo
