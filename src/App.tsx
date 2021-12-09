/**
 * @name App
 * @description
 * @author darcrand
 */

import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

import CustomLink from './components/CustomLink'
// 懒加载组件

const App: React.FC = () => {
  const routeElements = useRoutes(routes)
  return (
    <>
      <h1 className='m-4 font-serif'>React App</h1>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
      <hr />

      {routeElements}
    </>
  )
}

export default App
