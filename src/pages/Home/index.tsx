/**
 * @name Home
 * @description
 * @author darcrand
 */

import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1 className='mx-8 text-blue-500 font-bold text-3xl'>Home</h1>

      <Link to='/counter' className='m-4 underline'>
        Goto Counter Page.
      </Link>
      <Link to='/topics' className='m-4 underline'>
        Goto Topics
      </Link>

      <Outlet />
    </>
  )
}
