/**
 * @name PostDetail
 * @description
 * @author darcrand
 */

import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetail: React.FC = () => {
  const params = useParams()

  return (
    <>
      <h3 className='m-4'>PostDetail</h3>
      <p className='mx-4'>{JSON.stringify(params)}</p>
    </>
  )
}

export default PostDetail
