/**
 * @name App
 * @description
 * @author darcrand
 */

import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/routes'
import { useUserInfo } from './stores/user'
import CustomLink from './components/CustomLink'

const UserInfo = () => {
  const { info, login } = useUserInfo()
  return (
    <>
      {info.id ? (
        <div className='ml-auto flex items-center'>
          <span className='py-2 mr-2 text-gray-600 text-sm'>{info.name}</span>
          <img src={info.avatar} alt='' className='inlien-block w-[40px] h-[40px] bg-gray-400 rounded-full' />
        </div>
      ) : (
        <button className='ml-auto px-4 py-2 rounded bg-violet-600 text-white' onClick={login}>
          Sign In
        </button>
      )}
    </>
  )
}

const App: React.FC = () => {
  const routeElements = useRoutes(routes)
  return (
    <>
      <header className='flex items-center px-4 py-2 bg-white shadow-md'>
        <img src='https://vitejs.dev/logo.svg' alt='vite' className='w-[30px]' />
        <nav className='mx-4'>
          <CustomLink to='/posts'>Home</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
        </nav>

        <UserInfo />
      </header>

      {routeElements}
    </>
  )
}

export default App
