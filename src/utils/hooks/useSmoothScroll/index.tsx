import { pageLinks } from '@/utils/constants'
import { useEffect } from 'react'

// based on https://github.com/danro/easing-js/blob/master/easing.js
const CubicEaseInOut = pos => {
  return (pos /= 0.5) < 1
    ? 0.5 * Math.pow(pos, 3)
    : 0.5 * (Math.pow(pos - 2, 3) + 2)
}

const smoothScroll = (targetPosition, speed = 1000) => {
  let currentTime = 0
  const scrollPosition = window.scrollY || document.documentElement.scrollTop
  const minTime = 0.1
  const maxTime = 0.8
  const time = Math.max(
    minTime,
    Math.min(Math.abs(scrollPosition - targetPosition) / speed, maxTime),
  )

  const runScrollAnim = () => {
    currentTime += 1 / 60 // 60 fps

    const p = currentTime / time
    const t = CubicEaseInOut(p)

    if (p < 1) {
      window.requestAnimationFrame(runScrollAnim)
      window.scrollTo(0, scrollPosition + (targetPosition - scrollPosition) * t)
    } else {
      window.scrollTo(0, targetPosition)
    }
  }
  runScrollAnim()
}

const useSmoothScroll = () => {
  let currentIndex = 0
  const sectionList = pageLinks.map(link => link.to.slice(1))

  const changeIndex = (direction: 'up' | 'down') => {
    const nextIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1
    if (nextIndex < 0 || nextIndex > sectionList?.length - 1) currentIndex = 0
    currentIndex = nextIndex

    const currentSection = sectionList[currentIndex]
    const sectionRef = document.getElementById(currentSection)
    const desiredPosition = sectionRef?.offsetTop || 0
    smoothScroll(desiredPosition)
  }

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        changeIndex('down')
      }, 1000)
    }

    document.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default useSmoothScroll
