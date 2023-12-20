/**
 * @name App
 * @author darcrand
 * @description
 */

import { LoadingOutlined } from '@ant-design/icons'
import { Suspense, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes)

export default function App() {
  useEffect(() => {
    console.log('app mount')
  }, [])

  return (
    <>
      <Suspense
        // 如果内部的懒加载组件没有定义 loading
        // 则使用这个根级的 loading
        fallback={
          <section className='py-20 text-center text-3xl text-emerald-600'>
            <LoadingOutlined />
          </section>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}
