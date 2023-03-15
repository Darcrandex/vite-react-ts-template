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
      <ol className='w-96 pl-6 max-w-full mx-auto mt-12 list-decimal'>
        {res?.data.data.map((v) => (
          <li key={v.id} className='mb-4 last:mb-0 text-gray-700'>
            {v.title}
          </li>
        ))}
      </ol>
    </>
  )
}
