import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')

  return {
    plugins: [
      react(),
      legacy(),
      styleImport({
        libs: [
          {
            // antd(组件)样式按需加载
            libraryName: 'antd',
            esModule: true,
            resolveStyle: (name) => {
              return `antd/es/${name}/style/index`
            },
          },
        ],
      }),
    ],

    css: {
      preprocessorOptions: {
        less: {
          // 基于less-loader 8.x
          // 用来允许less使用变量
          javascriptEnabled: true,

          // 在所有的'less'文件前添加一段代码(引入全局变量)
          // 具体用法请参考: https://www.npmjs.com/package/less-loader#additionalData
          additionalData: `@import '@/styles/variables.less';`,

          // 自定义antd样式
          // 由于使用了按需加载,antd官方提供的自定义样式修改方式在这里就不能用了
          // 使用less-loader提供的选项,全局修改less文件中的变量值
          // 注意:要修改的变量名会与上述'less全局变量'冲突

          // 这里只是修改了主题色, '@theme-color' 的值来源于 '@/styles/variables.less';'
          // 是为了方便后续修改, 也可以使用一般的css属性值(eg: #ff0000)
          modifyVars: { '@primary-color': '@theme-color' },
        },
      },
    },

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
          },
        },
      },
    },
  }
})
