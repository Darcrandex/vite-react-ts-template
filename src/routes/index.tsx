import About from '@/pages/about'
import DataFetch from '@/pages/data-fetch'
import Home from '@/pages/home'
import RootLayout from '@/pages/layout'
import Status from '@/pages/status'
import UI from '@/pages/ui'
import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/data-fetch', element: <DataFetch /> },
      { path: '/ui', element: <UI /> },
      { path: '/status', element: <Status /> },
      { path: '/about', element: <About /> },
    ],
  },
]
