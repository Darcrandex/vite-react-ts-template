/**
 * @name Fetching
 * @description
 * @author darcrand
 */

import { topicService } from '@/services/topic'
import { useQuery } from '@tanstack/react-query'

function Topics() {
  const { data: res, isLoading } = useQuery({
    queryKey: ['topics'],
    queryFn: () => topicService.pages(),
  })

  return (
    <>
      {isLoading && <p className='text-center text-white'>Loading...</p>}

      <ol className='mx-auto mt-12 max-w-full list-decimal pl-6'>
        {res?.data?.slice(0, 10).map((v) => (
          <li key={v.id} className='mb-4 text-white last:mb-0'>
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
