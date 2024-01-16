import { ScrollTop, Toast } from './components'
import { Analytics } from '@vercel/analytics/react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

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
