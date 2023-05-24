import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ConfigProvider theme={{ token: { colorPrimary: '#8b5cf6' } }}>
      <StyleProvider hashPriority='high'>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StyleProvider>
    </ConfigProvider>
  </>
)
