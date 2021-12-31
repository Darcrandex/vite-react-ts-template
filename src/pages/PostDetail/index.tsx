/**
 * @name PostDetail
 * @description
 * @author darcrand
 */

import React from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Spin } from 'antd'
import { apiGetTopicById } from '@/services/topics'

const PostDetail: React.FC = () => {
  const params = useParams()
  const [search] = useSearchParams()
  const nav = useNavigate()
  const { data, isLoading } = useQuery(['topic', params], () => apiGetTopicById(params.id))

  return (
    <>
      <button onClick={() => nav(-1)}>返回</button>

      <blockquote className='m-4 text-gray-400'>{JSON.stringify({ params, search: search.toString() })}</blockquote>

      <Spin spinning={isLoading}>
        <h2 className='m-4 text-red-500 text-xl'>{data?.data.title}</h2>
        <section className='m-4' dangerouslySetInnerHTML={{ __html: data?.data.content || '' }}></section>
      </Spin>
    </>
  )
}

export default PostDetail
