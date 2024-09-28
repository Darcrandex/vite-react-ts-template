import { StyleProvider } from '@ant-design/cssinjs'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as AntdApp, ConfigProvider } from 'antd'
import emitter from 'mitt'
import { Inspector } from 'react-dev-inspector'
import ReactDOM from 'react-dom/client'

import zh_CN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import ResponseMessage, { ResponseMessageEvents } from '@/components/ResponseMessage'
import App from './App'
import './index.css'

dayjs.locale('zh-cn')

const root = document.getElementById('root') || document.body
const globalEmitter = emitter<ResponseMessageEvents>()
const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, gcTime: 5 * 60 * 1000, staleTime: 1 * 60 * 1000 } },

  queryCache: new QueryCache({
    onError(error) {
      typeof error.message === 'string' && globalEmitter.emit('responseError', error.message)
    },
  }),
  mutationCache: new MutationCache({
    onError(error) {
      typeof error.message === 'string' && globalEmitter.emit('responseError', error.message)
    },
  }),
})

ReactDOM.createRoot(root).render(
  <>
    <Inspector />
    <QueryClientProvider client={client}>
      <ConfigProvider locale={zh_CN} theme={{ token: { colorPrimary: '#2edfa3', colorLink: '#2edfa3' } }}>
        <StyleProvider hashPriority='high'>
          <AntdApp>
            <App />
            <ResponseMessage emiiter={globalEmitter} />
          </AntdApp>
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </>,
)
