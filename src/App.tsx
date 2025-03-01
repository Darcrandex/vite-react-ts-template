import GlobalAntdMessage from '@/components/GlobalAntdMessage'
import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as AntdApp, ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { useCSSVariable } from './hooks/useCSSVariable'
import { routes } from './routes'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  const [themeColor] = useCSSVariable('--color-primary')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: themeColor
              ? { colorPrimary: themeColor, colorLink: themeColor }
              : undefined,
          }}
        >
          <StyleProvider layer hashPriority='high'>
            <AntdApp>
              <GlobalAntdMessage />
              <RouterProvider router={router} />
            </AntdApp>
          </StyleProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  )
}
