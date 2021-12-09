/**
 * @name Posts
 * @description
 * @author darcrand
 */

import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../../components/CustomLink'

const Posts: React.FC = () => {
  return (
    <>
      <h2 className='m-4'>Posts</h2>

      <p>
        <CustomLink to='/posts/01'>post 1</CustomLink>
        <CustomLink to='/posts/02'>post 2</CustomLink>
        <CustomLink to='/posts/03'>post 3</CustomLink>
        <CustomLink to={{ pathname: '/posts/04', search: '?a=1&b=2' }}>post 4</CustomLink>
      </p>
      <hr />

      <Outlet />
    </>
  )
}

export default Posts
