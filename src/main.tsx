import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

const root = document.getElementById('root') || document.body
const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, gcTime: 5 * 60 * 1000, staleTime: 1 * 60 * 1000 } },
})

ReactDOM.createRoot(root).render(
  <>
    <QueryClientProvider client={client}>
      <ConfigProvider theme={{ token: { colorPrimary: '#10b981' } }}>
        <StyleProvider hashPriority='high'>
          <App />
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </>,
)
