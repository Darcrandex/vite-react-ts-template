/**
 * @name App
 * @author darcrand
 * @description
 */

import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes)

export default function App() {
  useEffect(() => {
    console.log('app mount')
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
