/**
 * @name Home
 * @description
 * @author darcrand
 */

import { cls } from '@/utils/cls'
import { useSize } from 'ahooks'
import { PropsWithChildren, useMemo, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const menus = [
  { to: '/about', title: 'About' },
  { to: '/antd', title: 'AntdUI' },
  { to: '/tailwind', title: 'Tailwind' },
  { to: '/state', title: 'State' },
  { to: '/fetching', title: 'Fetching' },
]

export default function Home() {
  const location = useLocation()
  const refNav = useRef<HTMLElement>(null)
  const navSize = useSize(refNav)

  const cursorStyle = useMemo(() => {
    const height = navSize ? navSize.height / menus.length : 0
    const menuIndex = menus.findIndex((v) => v.to === location.pathname)
    return { height, transform: `translate(50%,${100 * menuIndex}%)` }
  }, [navSize, location.pathname])

  return (
    <>
      <section className='flex flex-col h-screen bg-zinc-700 text-white'>
        <header>
          <h1 className='py-20 text-center text-4xl font-extrabold italic'>
            Vite React <span className='text-emerald-500'>Type</span>script Template.
          </h1>
        </header>

        <section className='flex-1 flex justify-center overflow-auto'>
          <aside className='w-32 mr-4'>
            <nav ref={refNav} className='relative text-right border-r border-gray-500/50'>
              {menus.map((v) => (
                <LinkItem key={v.to} to={v.to}>
                  {v.title}
                </LinkItem>
              ))}

              <i
                className='absolute top-0 right-0 w-[2px] bg-emerald-500 transition-all duration-300'
                style={cursorStyle}
              ></i>
            </nav>
          </aside>

          <main className='w-1/2 overflow-auto'>
            <Outlet />
          </main>
        </section>
      </section>
    </>
  )
}

function LinkItem(props: PropsWithChildren<{ to: string }>) {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === props.to

  return (
    <span
      className={cls(
        'block mr-4 py-2 transition-all duration-500 text-lg cursor-pointer',
        isActive ? 'opacity-100' : 'opacity-25 hover:opacity-75',
      )}
      onClick={() => navigate(props.to)}
    >
      {props.children}
    </span>
  )
}
