/**
 * @name Home
 * @description
 * @author darcrand
 */

import { useSize } from 'ahooks'
import clsx from 'clsx'
import { useMemo, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const menus = [
  { to: '/about', title: 'About' },
  { to: '/topics', title: 'Topics' },
  { to: '/antd', title: 'AntdUI' },
  { to: '/tailwind', title: 'Tailwind' },
  { to: '/state', title: 'State' },
]

export default function Home() {
  const location = useLocation()
  const refNav = useRef<HTMLElement>(null)
  const navSize = useSize(refNav)

  const cursorStyle = useMemo(() => {
    const height = navSize ? navSize.height / menus.length : 0
    const menuIndex = menus.findIndex((v) => v.to === location.pathname)
    return { height: height, transform: `translate( 50% ,${100 * menuIndex}%)` }
  }, [navSize, location.pathname])

  return (
    <>
      <header>
        <h1 className='py-20 text-center text-4xl font-extrabold italic'>
          Vite React <span className='text-emerald-500'>Type</span>script Template.
        </h1>
      </header>

      <section className='flex justify-center'>
        <aside className='w-32 mr-4'>
          <nav ref={refNav} className='relative text-right border-r border-gray-500/50'>
            {menus.map((v) => (
              <NavLink
                key={v.to}
                to={v.to}
                className={({ isActive }) =>
                  clsx(
                    'block mr-4 py-2 transition-all duration-500 text-lg',
                    isActive ? 'opacity-100' : 'opacity-25 hover:opacity-75'
                  )
                }
              >
                {v.title}
              </NavLink>
            ))}

            <i
              className='absolute top-0 right-0 w-[2px] bg-emerald-500 transition-all duration-300'
              style={cursorStyle}
            ></i>
          </nav>
        </aside>

        <main className='w-1/2'>
          <Outlet />
        </main>
      </section>
    </>
  )
}
