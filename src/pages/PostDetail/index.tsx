/**
 * @name PostDetail
 * @description
 * @author darcrand
 */

import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Spin } from 'antd'
import { apiGetTopicById } from '@/services/topics'

const PostDetail: React.FC = () => {
  const params = useParams()
  const [search] = useSearchParams()
  const { data, isLoading } = useQuery(['topic', params], () => apiGetTopicById(params.id))

  return (
    <>
      <Spin spinning={isLoading}>
        <h2 className='m-10 text-3xl font-bold text-center'>{data?.data.title}</h2>
        <blockquote className='m-4 text-gray-400 text-center'>
          {JSON.stringify({ params, search: search.toString() })}
        </blockquote>

        <section
          className='m-4 mx-auto w-9/12 container'
          dangerouslySetInnerHTML={{ __html: data?.data.content || '' }}
        ></section>
      </Spin>
    </>
  )
}

export default PostDetail
