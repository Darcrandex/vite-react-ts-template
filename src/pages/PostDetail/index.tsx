/**
 * @name PostDetail
 * @description
 * @author darcrand
 */

import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const PostDetail: React.FC = () => {
  const params = useParams()
  const [search] = useSearchParams()

  return (
    <>
      <h3 className='m-4'>PostDetail</h3>
      <p className='mx-4'>{JSON.stringify({ params, search: search.toString() })}</p>
    </>
  )
}

export default PostDetail
