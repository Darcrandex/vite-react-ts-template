import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router'

export const About = lazy(() => import('@/pages/about'))
export const DataFetch = lazy(() => import('@/pages/data-fetch'))
export const Home = lazy(() => import('@/pages/home'))
export const Status = lazy(() => import('@/pages/status'))
export const UI = lazy(() => import('@/pages/ui'))
export const RootLayout = lazy(() => import('@/pages/layout'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to='home' replace /> },
      { path: 'home', element: <Home /> },
      { path: 'data-fetch', element: <DataFetch /> },
      { path: 'ui', element: <UI /> },
      { path: 'status', element: <Status /> },
      { path: 'about', element: <About /> },
    ],
  },
]
