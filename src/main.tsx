import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App'
import './index.css'

const root = document.getElementById('root') || document.body
const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

ReactDOM.createRoot(root).render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ConfigProvider>
          <StyleProvider hashPriority='high'>
            <App />
          </StyleProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </>
)
