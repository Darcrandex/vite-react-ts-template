/**
 * @name AntdUI
 * @description
 * @author darcrand
 */

import { AndroidOutlined, AppleOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

export default function AntdUI() {
  return (
    <>
      <h1>AntdUI</h1>

      <Space>
        <Button icon={<AndroidOutlined />}>Android</Button>
        <Button icon={<AppleOutlined />}>Apple</Button>
        <Button icon={<GithubOutlined />}>Github</Button>
      </Space>
    </>
  )
}
