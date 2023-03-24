import { http } from '@/utils/http'

export type TopicListItem = {
  id: string
  title: string
}

export const apiTopic = {
  pages: () => http.get<TopicListItem[]>('https://jsonplaceholder.typicode.com/posts'),
}
