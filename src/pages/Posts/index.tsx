/**
 * @name Posts
 * @description
 * @author darcrand
 */

import React from 'react'
import { useQuery } from 'react-query'
import { Spin } from 'antd'
import CustomLink from '@/components/CustomLink'
import { apiGetTopics } from '@/services/topics'

const Posts: React.FC = () => {
  const { data, isLoading } = useQuery('get-topics', apiGetTopics)

  return (
    <>
      <h2 className='m-10 mb-3 text-5xl text-center font-bold'>
        <b className='text-gray-800'>News From</b>
        <b className='ml-2 text-violet-600'>Cnodejs</b>
      </h2>

      <p className='text-center text-gray-400'>Using React-Query and Axios</p>

      <Spin spinning={isLoading}>
        <ol className='container mx-auto list-decimal pl-10'>
          {data?.data.map((v) => (
            <li key={v.id as string}>
              <CustomLink to={{ pathname: `/posts/${v.id}`, search: '?a=1&b=2' }}>{v.title as string}</CustomLink>
            </li>
          ))}
        </ol>
      </Spin>
    </>
  )
}

export default Posts
