/**
 * @name Antd
 * @description
 * @author darcrand
 */

import { Button, Modal } from 'antd'
import { useCallback } from 'react'

export default function Antd() {
  const [modal, contextHolder] = Modal.useModal()

  const onClick = useCallback(() => {
    modal.info({ content: 'a modal with new API' })
  }, [modal])

  return (
    <section className='h-screen'>
      {contextHolder}
      <h1>Antd</h1>

      <Button type='primary' onClick={onClick}>
        Click Me
      </Button>
    </section>
  )
}
