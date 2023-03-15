/**
 * @name Counter
 * @author darcrand
 * @description
 */

import { useCounter } from '@/sotres/counter'
import { Button, Space } from 'antd'

export default function Counter() {
  const { count, add, sub, loading } = useCounter()

  return (
    <>
      <section className='text-center my-6'>
        <p className='mb-4 flex justify-center font-bold text-gray-700'>
          <span>count</span>
          <span className='w-10 text-right'>{count}</span>
        </p>

        <Space>
          <Button onClick={add}>Add</Button>
          <Button loading={loading} onClick={sub}>
            Sub
          </Button>
        </Space>
      </section>
    </>
  )
}
