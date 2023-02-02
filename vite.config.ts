import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [react()],

    server: { host: true, port: parseInt(env.VITE_APP_PORT) || 3000 },
  }
})
