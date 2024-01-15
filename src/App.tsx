import { ScrollTop, Toast } from './components'
import { Analytics } from '@vercel/analytics/react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
])

const App = () => {
  useEffect(() => {
    toast.info('Ops, this website is still under development. Come back later!')
  }, [])
  return (
    <>
      <Toast />
      <ScrollTop />
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}

export default App
