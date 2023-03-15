/**
 * @name Home
 * @description
 * @author darcrand
 */

import clsx from 'clsx'
import { NavLink, Outlet } from 'react-router-dom'

const menus = [
  { to: '/counter', title: 'Counter' },
  { to: '/topics', title: 'Topics' },
]

export default function Home() {
  return (
    <>
      <h1 className='my-8 text-blue-400 font-extrabold text-4xl text-center'>React Typescript</h1>

      <nav className='text-center divide-x'>
        {menus.map((v) => (
          <NavLink
            key={v.to}
            to={v.to}
            className={({ isActive }) => clsx('px-6 text-blue-400 text-lg', isActive && 'underline')}
          >
            {v.title}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </>
  )
}
