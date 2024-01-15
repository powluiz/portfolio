import {
  About,
  Contact,
  Experience,
  Home,
  Projects,
  Skills,
} from '@/components'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function HomePage() {
  useEffect(() => {
    toast.info('Ops, this website is still under development. Come back later!')
  }, [])

  return (
    <div>
      <Home />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage
