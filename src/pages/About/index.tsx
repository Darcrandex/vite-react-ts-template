/**
 * @name About
 * @description
 * @author darcrand
 */

import React from 'react'
import { useCounter } from '@/stores/counter'

const About: React.FC = () => {
  const { count, add, sub } = useCounter()
  return (
    <>
      <section className='w-9/12 mx-auto my-5 text-center'>
        <h1 className='font-extrabold text-gray-600'>Recoil Store</h1>
        <p className='text-xl my-4'>count: {count}</p>
        <p>
          <button className='mr-2 rounded border-2 border-violet-600 px-2 py-1 bg-violet-600 text-white' onClick={add}>
            Add
          </button>
          <button className='rounded border-2 border-violet-600 px-2 py-1 text-violet-600' onClick={sub}>
            Sub
          </button>
        </p>
      </section>
    </>
  )
}

export default About
