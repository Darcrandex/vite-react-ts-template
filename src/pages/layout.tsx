import { cls } from '@/utils/cls'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink, useLocation, useOutlet } from 'react-router'

const links = [
  { path: '/', text: 'Home' },
  { path: '/data-fetch', text: 'Data Fetch' },
  { path: '/ui', text: 'UI' },
  { path: '/status', text: 'Status' },
  { path: '/about', text: 'About' },
]

const AnimatedOutlet = () => {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode='wait' initial={true}>
      <motion.div
        key={location.pathname}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}

export default function RootLayout() {
  return (
    <>
      <section className='flex h-screen flex-col items-center justify-center bg-gray-900 text-white'>
        <div className='w-[375px]'>
          <header className='mb-6 text-center text-lg font-bold uppercase'>
            react-ts-template
          </header>

          <nav className='text-center'>
            {links.map((v) => (
              <NavLink
                key={v.path}
                to={v.path}
                className={({ isActive }) =>
                  cls(
                    'px-2 transition-all duration-300',
                    isActive ? 'text-primary underline' : 'hover:text-primary',
                  )
                }
              >
                {v.text}
              </NavLink>
            ))}
          </nav>

          <main className='h-96 p-4'>
            <AnimatedOutlet />
          </main>
        </div>
      </section>
    </>
  )
}
