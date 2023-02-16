import React from 'react'
import { RouteObject } from 'react-router-dom'
import { withSuspense } from './utils'

const Home = withSuspense(React.lazy(() => import('@/pages/Home')))
const Topics = withSuspense(React.lazy(() => import('@/pages/Topics')))
const Counter = withSuspense(React.lazy(() => import('@/pages/Counter')))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/topics', element: <Topics /> },
      { path: 'counter', element: <Counter /> },
    ],
  },
]
