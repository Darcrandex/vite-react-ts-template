import { withSuspense } from '@/utils/withSuspense'
import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = withSuspense(lazy(() => import('@/pages/Home')))
const AntdUI = withSuspense(lazy(() => import('@/pages/AntdUI')))
const Tailwind = withSuspense(lazy(() => import('@/pages/Tailwind')))
const About = withSuspense(lazy(() => import('@/pages/About')))
const StateManager = withSuspense(lazy(() => import('@/pages/StateManager')))
const Fetching = withSuspense(lazy(() => import('@/pages/Fetching')))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to='about' /> },
      { path: 'antd', element: <AntdUI /> },
      { path: 'tailwind', element: <Tailwind /> },
      { path: 'about', element: <About /> },
      { path: 'state', element: <StateManager /> },
      { path: 'fetching', element: <Fetching /> },
    ],
  },
]
