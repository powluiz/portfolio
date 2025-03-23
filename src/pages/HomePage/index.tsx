import {
  About,
  Contact,
  Experience,
  Footer,
  Home,
  Projects,
  Skills,
} from '@/components'

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
