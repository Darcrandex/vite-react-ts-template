import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [react(), legacy()],

    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },

    server: { port: parseInt(env.PORT) || 4000, host: true },

    base: './',

    build: {
      rollupOptions: {
        output: {
          // 把不同的依赖分组打包
          // 这里需要注意顺序,否则会报错
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            mobx: ['mobx', 'mobx-react-lite'],
          },
        },
      },
    },
  }
})
