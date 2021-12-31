import React from 'react'
import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import AuthWrapper from './common/AuthWrapper'
import { Authorization } from './enums'

// 使用局部的 loading 是为了让组件不影响其他已经加载的组件
const LoadingWrapper: React.FC = ({ children }) => <React.Suspense fallback='loading...'>{children}</React.Suspense>

interface IRoute extends RouteObject {
  component: React.FC | React.LazyExoticComponent<React.FC> // 解决 element 属性无法直接使用 React.LazyExoticComponent 的问题
  roles?: Authorization[] // 权限判断
  children?: IRoute[]
}

function toRouteObject(routeConfig: IRoute): RouteObject {
  const { component: Content, roles, children, ...rest } = routeConfig

  const element = (
    <LoadingWrapper>
      {Array.isArray(roles) && roles.length > 0 ? (
        <AuthWrapper roles={roles}>
          <Content />
        </AuthWrapper>
      ) : (
        <Content />
      )}
    </LoadingWrapper>
  )

  return { ...rest, element, children: Array.isArray(children) ? children.map((v) => toRouteObject(v)) : undefined }
}

const routeMap: IRoute[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/posts',
        component: React.lazy(() => import('./pages/Posts')),
        roles: [Authorization.Admin, Authorization.User],
      },
    ],
  },
  { path: '/posts/:id', component: React.lazy(() => import('./pages/PostDetail')) },
  { path: '/about', component: React.lazy(() => import('./pages/About')) },
]

const routes: RouteObject[] = routeMap.map(toRouteObject)

export default routes
