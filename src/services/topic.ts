import { http } from '@/utils/http'

export const apiTopic = {
  pages: () => http.get<API.TopicListItem[]>('https://jsonplaceholder.typicode.com/posts'),
}
