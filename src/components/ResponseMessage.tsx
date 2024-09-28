/**
 * @name ResponseMessage
 * @description 接口返回信息提示，与 react-query 相结合
 * @author darcrand
 */

import { App } from 'antd'
import { Emitter } from 'mitt'
import { useEffect } from 'react'

export type ResponseMessageEvents = {
  responseSuccess: string
  responseError: string
}

export type ResponseMessageProps = {
  emiiter: Emitter<ResponseMessageEvents>
}

export default function ResponseMessage(props: ResponseMessageProps) {
  const { message } = App.useApp()

  useEffect(() => {
    props.emiiter.on('responseSuccess', message.success)
    props.emiiter.on('responseError', message.error)

    return () => {
      props.emiiter.off('responseSuccess', message.success)
      props.emiiter.off('responseError', message.error)
    }
  }, [message, props.emiiter])

  return null
}
