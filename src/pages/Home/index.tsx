/**
 * @name Home
 * @description
 * @author darcrand
 */

import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../../components/CustomLink'

const Home: React.FC = () => {
  return (
    <>
      <h2 className='m-4'>Home</h2>
      <CustomLink to='/posts'>Posts</CustomLink>
      <hr />
      <Outlet />
    </>
  )
}

export default Home
