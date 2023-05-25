/**
 * @name App
 * @description
 * @author darcrand
 */

import clsx from 'clsx'
import { useEffect } from 'react'

import './app.css'
import { useScroll } from './hooks/use-scroll'
import Antd from './pages/Antd'
import Fetching from './pages/Fetching'
import Heading from './pages/Heading'
import Routing from './pages/Routing'
import StateManager from './pages/StateManager'
import Tailwind from './pages/Tailwind'

export default function App() {
  useEffect(() => {
    console.log('app mounted')
  }, [])

  const { elRef, isScrolling } = useScroll()

  return (
    <>
      <section ref={elRef} className={clsx('h-screen', isScrolling ? '' : 'scrollbar_scroll--end')}>
        <Heading />
        <Routing />
        <Antd />
        <Fetching />
        <StateManager />
        <Tailwind />
      </section>
    </>
  )
}
