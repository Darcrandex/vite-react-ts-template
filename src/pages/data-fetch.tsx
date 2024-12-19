import { http } from '@/utils/http'
import { LoadingOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'

export default function DataFetch() {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () =>
      http.get<API.ResponseSchema<API.TopicListItem>>(
        'https://jsonplaceholder.typicode.com/todos/1',
      ),
    select: (data) => data.data,
  })

  return (
    <>
      <p className='text-center'>fetching with react-query</p>

      {isLoading && (
        <p className='text-center'>
          <LoadingOutlined />
          <span>loading...</span>
        </p>
      )}

      <pre className='p-4'>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
