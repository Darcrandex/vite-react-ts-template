/**
 * @name StateManager
 * @description
 * @author darcrand
 */

import { useCounter } from '@/sotres/counter'
import { Button, Col, Row } from 'antd'

export default function StateManager() {
  return (
    <article className='mx-10'>
      <h1 className='text-2xl font-bold'>全局状态管理</h1>
      <p className='mt-4'>
        深受
        <a className='link' href='https://redux.js.org/' target='_blank' rel='noreferrer'>
          Redux
        </a>
        的荼毒，已经不想再写如此繁琐的代码。化繁为简，返璞归真，我要的只是一个全局的状态管理工具。
        <a className='link' target='_blank' href='https://jotai.org/' rel='noreferrer'>
          Jotai
        </a>
        可以满足我的要求，选择它的原因有三个：“简单”，“简单”，“还™是简单”。就像写<code>useState</code>一样简单。
      </p>

      <ol className='mt-10 list-decimal pl-8'>
        <li>
          <a className='link' href='https://mobx.js.org/README.html' target='_blank' rel='noreferrer'>
            Mobx
          </a>
          函数组件使用很麻烦
        </li>
        <li>
          <a className='link' href='https://recoiljs.org/' target='_blank' rel='noreferrer'>
            Recoil
          </a>
          2023-03还没发布 1.0
        </li>
        <li>
          <a className='link' target='_blank' href='https://react.dev/reference/react/useContext' rel='noreferrer'>
            useContext
          </a>
          无限套娃很烦
        </li>
      </ol>

      <section className='mt-10'>
        <Row>
          <Col span={12}>
            <Counter id='0001' />
          </Col>
          <Col span={12}>
            <Counter id='0002' />
          </Col>
        </Row>
      </section>
    </article>
  )
}

function Counter(props: { id: string }) {
  const { count, inc, decSync, isLoading } = useCounter(props.id)
  return (
    <>
      <h2 className='text-lg font-bold'>Counter (id = {props.id})</h2>
      <p className='my-4 text-lg'>count = {count}</p>
      <Button.Group>
        <Button onClick={inc}>Inc</Button>
        <Button loading={isLoading} onClick={decSync}>
          Dec
        </Button>
      </Button.Group>
    </>
  )
}
