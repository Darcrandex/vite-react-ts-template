import { inspectorServer } from '@react-dev-inspector/vite-plugin'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import dayjs from 'dayjs'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [
      react(),
      legacy(),
      inspectorServer(),
      createHtmlPlugin({
        entry: 'src/main.tsx',
        // 在 index.html 中注入自定义变量
        inject: { data: { BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm:ss') } },
      }),
    ],

    resolve: { alias: { '@': path.resolve(__dirname, './src'), src: path.resolve(__dirname, './src') } },
    server: { host: true, port: parseInt(env.VITE_APP_PORT) || 3000 },

    build: {
      // 模块分包打包
      // 把相关的包单独打包成一个 chunk
      rollupOptions: { output: { manualChunks: { antd: ['antd', '@ant-design/icons', '@ant-design/cssinjs'] } } },
    },
  }
})
