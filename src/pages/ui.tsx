import {
  AndroidOutlined,
  AppleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { App, Button, Space } from 'antd'
import { useCallback } from 'react'

export default function UI() {
  const { modal } = App.useApp()
  const onOpen = useCallback(() => {
    modal.info({
      title: 'tips',
      content: 'this is an antd modal',
    })
  }, [modal])

  return (
    <>
      <p className='mb-4 text-center'>Antd UI</p>

      <section className='flex justify-center'>
        <Space>
          <Button type='primary' icon={<AndroidOutlined />}>
            Android
          </Button>
          <Button icon={<AppleOutlined />}>Apple</Button>
          <Button icon={<InfoCircleOutlined />} onClick={onOpen}>
            Modal
          </Button>
        </Space>
      </section>
    </>
  )
}
