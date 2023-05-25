/**
 * @name App
 * @description
 * @author darcrand
 */

import { useEffect } from 'react'

import ScrollView from './components/ScrollView'
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

  return (
    <>
      <ScrollView className='h-screen'>
        <Heading />
        <Routing />
        <Antd />
        <Fetching />
        <StateManager />
        <Tailwind />
      </ScrollView>
    </>
  )
}
