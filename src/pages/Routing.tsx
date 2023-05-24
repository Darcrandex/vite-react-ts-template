/**
 * @name Routing
 * @description
 * @author darcrand
 */

import { NavLink, Outlet, RouterProvider, createHashRouter, useParams } from 'react-router-dom'

const Root = () => {
  return (
    <div className='h-screen'>
      <h2>The Root Route</h2>
      <nav>
        <NavLink to='1'>Sub 1</NavLink>
        <NavLink to='2'>Sub 2</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

const Sub = () => {
  const { id } = useParams()
  return (
    <div>
      <NavLink to='/'>back</NavLink>
      <h3>Sub Route</h3>
      <p>id: {id}</p>
    </div>
  )
}

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: ':id', element: <Sub /> }],
  },
])

export default function Routing() {
  return (
    <>
      <h1>Routing</h1>
      <RouterProvider router={router} />
    </>
  )
}
