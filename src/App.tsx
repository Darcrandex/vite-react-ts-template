import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { rose } from 'tailwindcss/colors'
import { routes } from './routes'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 10 },
  },
})

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={{ token: { colorPrimary: rose[500] } }}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  )
}
