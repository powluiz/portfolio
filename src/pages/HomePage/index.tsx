import { About, Contact, Experience, Home, Skills } from '@/components'

function HomePage() {
  return (
    <div>
      <Home />
      <Skills />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage
