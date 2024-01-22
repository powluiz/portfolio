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
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
