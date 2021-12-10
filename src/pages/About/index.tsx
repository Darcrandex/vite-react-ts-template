/**
 * @name About
 * @description
 * @author darcrand
 */

import React from 'react'
import { observer } from 'mobx-react-lite'
import { DatePicker } from 'antd'
import { counter } from '@/stores/counter'

const About: React.FC = () => {
  return (
    <>
      <h1 className='m-4'>About</h1>

      <hr />
      <p className='m-4'>count: {counter.count}</p>
      <p className='m-4'>
        <button
          className='inline-block px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-400 transition-all'
          onClick={counter.add}
        >
          add
        </button>
      </p>

      <DatePicker />
    </>
  )
}

export default observer(About)
