import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { Inspector } from 'react-dev-inspector'
import ReactDOM from 'react-dom/client'

import zh_CN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import App from './App'
import './index.css'

dayjs.locale('zh-cn')

const root = document.getElementById('root') || document.body
const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, gcTime: 5 * 60 * 1000, staleTime: 1 * 60 * 1000 } },
})

ReactDOM.createRoot(root).render(
  <>
    <Inspector />
    <QueryClientProvider client={client}>
      <ConfigProvider locale={zh_CN} theme={{ token: { colorPrimary: '#10b981' } }}>
        <StyleProvider hashPriority='high'>
          <App />
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </>,
)
