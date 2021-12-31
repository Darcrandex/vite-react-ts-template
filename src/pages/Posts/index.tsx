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
      <h2 className='m-4'>Posts</h2>

      <Spin spinning={isLoading}>
        <ol>
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
