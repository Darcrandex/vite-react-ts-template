/**
 * @name Topics
 * @description
 * @author darcrand
 */

import { useQuery } from '@tanstack/react-query'
import { http } from '@/utils/http'

export default function Topics() {
  const { data } = useQuery(['topics'], () => http.get('https://cnodejs.org/api/v1/topics?limit=2'))

  return (
    <>
      <h1>Topics</h1>

      <section>
        <p className='p-4 break-words'>{JSON.stringify(data || '{}')}</p>
      </section>
    </>
  )
}
