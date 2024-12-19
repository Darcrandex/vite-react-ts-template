import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

export default function UI() {
  return (
    <>
      <p className='mb-4 text-center'>Antd UI</p>

      <section className='flex justify-center'>
        <Space>
          <Button type='primary' icon={<AndroidOutlined />}>
            Android
          </Button>
          <Button icon={<AppleOutlined />}>Apple</Button>
        </Space>
      </section>
    </>
  )
}
