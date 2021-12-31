import http from '@/utils/http'

export async function apiGetTopics(): Promise<{ data: Record<string, unknown>[] }> {
  return await http.get('https://cnodejs.org/api/v1/topics')
}

export async function apiGetTopicById(id = ''): Promise<{ data: { title: string; content: string } }> {
  return await http.get(`https://cnodejs.org/api/v1/topic/${id}`)
}
