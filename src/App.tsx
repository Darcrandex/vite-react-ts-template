import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { useCSSVariable } from './hooks/useCSSVariable'
import { routes } from './routes'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 10 },
  },
})

export default function App() {
  const themeColor = useCSSVariable('--color-primary')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: themeColor ? { colorPrimary: themeColor } : undefined,
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  )
}
