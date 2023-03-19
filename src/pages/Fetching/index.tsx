/**
 * @name Fetching
 * @description
 * @author darcrand
 */

import { apiTopic } from '@/services/topic'
import { useQuery } from '@tanstack/react-query'

function Topics() {
  const { data: res } = useQuery(['topics'], apiTopic.pages)

  return (
    <>
      <ol className='pl-6 max-w-full mx-auto mt-12 list-decimal'>
        {res?.data.data.map((v) => (
          <li key={v.id} className='mb-4 last:mb-0 text-white'>
            {v.title}
          </li>
        ))}
      </ol>
    </>
  )
}

export default function Fetching() {
  return (
    <article className='mx-10'>
      <h1 className='text-2xl font-bold'>关于数据请求</h1>
      <p className='mt-4'>
        使用<code>axios</code>和<code>react-query</code>
      </p>

      <Topics />
    </article>
  )
}
