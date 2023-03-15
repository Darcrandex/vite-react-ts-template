import { http } from '@/utils/http'

export type TopicListItem = {
  id: string
  title: string
}

export const apiTopic = {
  pages: () => http.get<{ data: TopicListItem[] }>('https://cnodejs.org/api/v1/topics?limit=10'),
}
