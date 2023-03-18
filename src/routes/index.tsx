import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { withSuspense } from './utils'

const Home = withSuspense(React.lazy(() => import('@/pages/Home')))
const Topics = withSuspense(React.lazy(() => import('@/pages/Topics')))
const Counter = withSuspense(React.lazy(() => import('@/pages/Counter')))
const AntdUI = withSuspense(React.lazy(() => import('@/pages/AntdUI')))
const Tailwind = withSuspense(React.lazy(() => import('@/pages/Tailwind')))
const About = withSuspense(React.lazy(() => import('@/pages/About')))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to='about' /> },
      { path: 'topics', element: <Topics /> },
      { path: 'antd', element: <AntdUI /> },
      { path: 'tailwind', element: <Tailwind /> },
      { path: 'about', element: <About /> },
      { path: 'counter', element: <Counter /> },
    ],
  },
]
