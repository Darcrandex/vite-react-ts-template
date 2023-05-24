/**
 * @name Fetching
 * @description
 * @author darcrand
 */

import { http } from '@/utils/http'
import { useQuery } from '@tanstack/react-query'

type DataItem = { id: string; title: string }
const dataUrl = 'https://jsonplaceholder.typicode.com/posts'

export default function Fetching() {
  const { data, isFetching } = useQuery({
    queryKey: ['list'],
    queryFn: () => http.get<DataItem[]>(dataUrl),
    select(res) {
      return res.data.slice(0, 5)
    },
  })

  return (
    <section className='h-screen'>
      <h1>React Query + Axios</h1>

      {isFetching ? (
        'loading...'
      ) : (
        <ul className='w-1/2 h-[50vh] overflow-auto'>
          {data?.map((v) => (
            <li key={v.id}>{v.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
