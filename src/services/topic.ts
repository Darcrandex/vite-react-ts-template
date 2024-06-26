import { http } from '@/utils/http'

export const topicService = {
  pages: () => http.get<API.TopicListItem[]>('https://jsonplaceholder.typicode.com/posts'),
}
