import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [react(), legacy()],
    resolve: { alias: { '@': path.resolve(__dirname, './src'), src: path.resolve(__dirname, './src') } },

    server: { host: true, port: parseInt(env.VITE_APP_PORT) || 3000 },

    build: {
      // 由于在本项目中，最大的依赖包是 antd
      // 因此把相关的包单独打包成一个 chunk
      rollupOptions: { output: { manualChunks: { antd: ['antd', '@ant-design/icons', '@ant-design/cssinjs'] } } },
    },
  }
})
