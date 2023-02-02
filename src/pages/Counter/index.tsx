/**
 * @name Counter
 * @author darcrand
 * @description
 */

import { useCounter } from '@/sotres/counter'
import React from 'react'

const Counter: React.FC = () => {
  const { count, add, sub } = useCounter()
  return (
    <>
      <h1 className='m-8 font-bold'>Counter</h1>

      <section className='text-center my-6'>
        <p className='mb-4'>count:{count}</p>
        <p>
          <button className='mx-4 px-2 border border-blue-300' onClick={add}>
            add
          </button>
          <button className='mx-4 px-2 border border-blue-300' onClick={sub}>
            sub
          </button>
        </p>
      </section>
    </>
  )
}

export default Counter
