import axios from 'axios'

export const http = axios.create({
  baseURL: '',
  timeout: 60 * 1000,
})

http.interceptors.request.use((config) => {
  return config
})
