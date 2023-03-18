/**
 * @name Counter
 * @description
 * @author darcrand
 */

import { useCounter } from '@/sotres/counter'
import { Button } from 'antd'

export default function Counter() {
  return (
    <>
      <h1>Counter</h1>
      <CounterItem id='001' />
      <CounterItem id='002' />
    </>
  )
}

function CounterItem(props: { id: string }) {
  const { count, inc, decSync, isLoading } = useCounter(props.id)
  return (
    <>
      <h2>Counter {props.id}</h2>
      <p>count = {count}</p>
      <p>
        <Button onClick={inc}>Inc</Button>
        <Button loading={isLoading} onClick={decSync}>
          Dec
        </Button>
      </p>
    </>
  )
}
