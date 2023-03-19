/**
 * @name AntdUI
 * @description
 * @author darcrand
 */

import { BackwardFilled, CalculatorFilled, FacebookFilled } from '@ant-design/icons'
import { Button, DatePicker, Input, Space } from 'antd'

export default function AntdUI() {
  return (
    <article className='mx-10'>
      <h1 className='text-2xl font-bold'>
        <a className='link' target='_blank' href='https://ant.design/index-cn' rel='noreferrer'>
          Ant Design 5.0
        </a>
      </h1>

      <p className='mt-4'>
        国内老字号 UI 框架，升级到 v5 版本后用起来更舒适。虽然基于<code className='code'>React</code>的 UI
        框架还有很多，但仍然觉得 Antd
        更适合。一方面是文档相对来说比较友好，而且更容易上手。至于风格方面，萝卜白菜各有所爱。社区方面还是挺活跃的，不过最近（2023-03-19）
        issue 比较多，可能还要等几个版本才能完全稳定下来。而且采用了<code className='code'>css-in-js</code>
        的方案，动态修改主题的需求就可以很好的解决了。总的来说，<code className='code'>Antd</code>
        可能不是最好的，但可以说是最稳的。
      </p>

      <section className='mt-10'>
        <Space>
          <Button type='primary' icon={<FacebookFilled />}>
            Facebook
          </Button>
          <Button icon={<BackwardFilled />}>Backward</Button>
          <Button icon={<CalculatorFilled />}>Calculator</Button>
          <Input placeholder='type your name' />
          <DatePicker />
        </Space>
      </section>
    </article>
  )
}
