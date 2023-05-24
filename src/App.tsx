/**
 * @name App
 * @description
 * @author darcrand
 */

import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

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

  const elRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (elRef.current) {
      const sb = Scrollbar.init(elRef.current)
      return () => {
        sb.destroy()
      }
    }
  }, [])

  return (
    <>
      <section ref={elRef} className='h-screen overflow-auto'>
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
