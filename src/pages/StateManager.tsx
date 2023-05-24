/**
 * @name StateManager
 * @description
 * @author darcrand
 */

import { useCounter } from '@/stores/counter'
import { Button, Space } from 'antd'

export default function StateManager() {
  const { count, inc, dec } = useCounter()
  return (
    <section className='h-screen'>
      <h1>StateManager</h1>

      <p>count: {count}</p>
      <Space>
        <Button onClick={inc}>Inc</Button>
        <Button onClick={dec}>Dec</Button>
      </Space>
    </section>
  )
}
