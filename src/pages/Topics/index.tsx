/**
 * @name Topics
 * @description
 * @author darcrand
 */

import { apiTopic } from '@/services/topic'
import { useQuery } from '@tanstack/react-query'

export default function Topics() {
  const { data: res } = useQuery(['topics'], apiTopic.pages)

  return (
    <>
      <ol className='mx-10 pl-6 max-w-full list-decimal'>
        {res?.data.slice(0, 10).map((v) => (
          <li key={v.id} className='mb-4 last:mb-0 text-gray-100'>
            {v.title}
          </li>
        ))}
      </ol>
    </>
  )
}
