import resolveconfig from 'tailwindcss/resolveConfig'
import tailwindconfig from '../../../../tailwind.config'
import { useEffect, useState } from 'react'

export type TBreakpointSizes = 'sm' | 'md' | 'lg' | 'xl'

const useBreakpoint = (breakpoint: TBreakpointSizes) => {
  const fullConfig = resolveconfig(tailwindconfig)
  const [isLargerThanBreakpoint, setIsLargerThanBreakpoint] = useState(false)

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0
      const desiredBreakpoint = parseInt(fullConfig.theme.screens[breakpoint])
      setIsLargerThanBreakpoint(width >= desiredBreakpoint)
    }

    checkBreakpoint()

    window.addEventListener('resize', checkBreakpoint)
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  return isLargerThanBreakpoint
}

export default useBreakpoint
