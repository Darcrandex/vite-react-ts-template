/**
 * @name Home
 * @description
 * @author darcrand
 */

import clsx from 'clsx'
import { NavLink, Outlet } from 'react-router-dom'

const menus = [
  { to: '/about', title: 'About' },
  { to: '/topics', title: 'Topics' },
  { to: '/antd', title: 'AntdUI' },
  { to: '/tailwind', title: 'Tailwind' },
  { to: '/counter', title: 'Counter' },
]

export default function Home() {
  return (
    <>
      <section className='flex'>
        <main className='flex-1'>
          <Outlet />
        </main>

        <aside className='w-96'>
          <nav>
            {menus.map((v) => (
              <NavLink
                key={v.to}
                to={v.to}
                className={({ isActive }) => clsx('block px-6 text-blue-400 text-lg', isActive && 'underline')}
              >
                {v.title}
              </NavLink>
            ))}
          </nav>
        </aside>
      </section>
    </>
  )
}
