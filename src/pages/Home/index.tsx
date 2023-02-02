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
      <h1 className='mx-8 text-blue-500 font-bold text-3xl'>Home</h1>

      <Link to='/counter' className='m-4 underline'>
        Goto Counter Page.
      </Link>
    </>
  )
}

export default Home
