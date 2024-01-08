import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button, Icon } from '..'
import { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const minimumScroll = window.innerHeight / 2

  const handleScroll = () => {
    const position = window?.scrollY
    setScrollPosition(position)
  }

  useLayoutEffect(() => {
    if (scrollPosition > minimumScroll) {
      gsap.to('.scroll-button', {
        scale: 1,
        duration: 1,
        ease: 'power4.out',
      })
    } else {
      gsap.to('.scroll-button', {
        scale: 0,
        duration: 1,
        ease: 'power4.out',
      })
    }
  }, [scrollPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Button
        onClick={() => window.scrollTo(0, 0)}
        className="scroll-button fixed bottom-6 right-6 z-50 h-[3.25rem] w-[3.25rem] scale-0 rounded-full bg-primary-dark shadow-lg transition-colors duration-300 ease-in-out hover:bg-primary-base md:bottom-8 md:right-8"
      >
        <Icon icon={faChevronUp} />
      </Button>
    </div>
  )
}

export default ScrollTop
