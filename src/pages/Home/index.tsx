/**
 * @name Home
 * @author darcrand
 * @description
 */

import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to='/counter'>Goto Counter Page.</Link>
    </>
  )
}

export default Home
