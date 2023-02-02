import React from 'react'
import { RouteObject } from 'react-router-dom'
import { withSuspense } from './utils'

const Counter = withSuspense(React.lazy(() => import('../pages/Counter')))

export const counterRoutes: RouteObject[] = [{ path: '/counter', element: <Counter /> }]
