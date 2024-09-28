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
      <section className='flex h-screen flex-col bg-zinc-700 text-white'>
        <header>
          <h1 className='py-20 text-center text-4xl font-extrabold italic'>
            Vite React <span className='text-primary'>Type</span>script Template.
          </h1>
        </header>

        <section className='flex flex-1 justify-center overflow-auto'>
          <aside className='mr-4 w-32'>
            <nav ref={refNav} className='relative border-r border-gray-500/50 text-right'>
              {menus.map((v) => (
                <LinkItem key={v.to} to={v.to}>
                  {v.title}
                </LinkItem>
              ))}

              <i
                className='absolute right-0 top-0 w-[2px] bg-primary transition-all duration-300'
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
        'mr-4 block cursor-pointer py-2 text-lg transition-all duration-500',
        isActive ? 'opacity-100' : 'opacity-25 hover:opacity-75',
      )}
      onClick={() => navigate(props.to)}
    >
      {props.children}
    </span>
  )
}
