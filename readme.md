# Vite React Template

## tailwind

[Install Tailwind CSS with Vue 3 and Vite](https://tailwindcss.com/docs/guides/vue-3-vite)

### 错误 `Unknown at rule @apply`

编辑器安装扩展: `PostCSS Language Support`

### 与 antd 结合

可以与 antd 同时使用, 并实现按需加载.

## mobx

```bash
yarn add mobx mobx-react-lite
```

新建一个工具函数 `/src/utils/create-mobx-store.ts`
在`/src/stores`文件夹中定义各个模块

## react router v6

本例中, 使用 `useRoutes` 来配置路由, 并结合了权限校验和懒加载.
