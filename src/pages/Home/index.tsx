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
      <Outlet />
    </>
  )
}

export default Home
