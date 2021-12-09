# Vite React Template

## tailwind

[Install Tailwind CSS with Vue 3 and Vite](https://tailwindcss.com/docs/guides/vue-3-vite)

### 错误 `Unknown at rule @apply`

编辑器安装扩展: `PostCSS Language Support`

### 使用 stylelint

```json
{
  "scripts": {
    "style": "stylelint --cache --fix --ignore-path .gitignore '**/*.css'"
  }
}
```

## mobx

```bash
yarn add mobx mobx-react-lite
```

新建一个工具函数 `/src/utils/create-mobx-store.ts`
在`/src/stores`文件夹中定义各个模块
