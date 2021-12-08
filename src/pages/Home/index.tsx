/**
 * @name Home
 * @description
 * @author darcrand
 */

import React from 'react'
import { Outlet } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>

      <hr />
      <Outlet />
    </>
  )
}

export default Home
