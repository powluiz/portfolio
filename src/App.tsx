import {
  About,
  Contact,
  Experience,
  Home,
  Projects,
  ScrollTop,
  Skills,
  Toast,
} from './components'
import { Analytics } from '@vercel/analytics/react'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Toast />
      <ScrollTop />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Analytics />
    </div>
  )
}

export default App
