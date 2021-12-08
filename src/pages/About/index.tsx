/**
 * @name About
 * @description
 * @author darcrand
 */

import React from 'react'
import { observer } from 'mobx-react-lite'
import { counter } from '../../stores/counter'

const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>

      <hr />
      <p>count: {counter.count}</p>
      <p>
        <button onClick={counter.add}>add</button>
      </p>
    </>
  )
}

export default observer(About)
