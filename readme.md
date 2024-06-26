# vite-react-ts-template

一个轻量型的 react 项目模版。可以满足基本的业务需求。

## 技术栈

- [vitejs](https://vitejs.dev/)
- [react router](https://reactrouter.com/en/main)
- [tailwindcss](https://tailwindcss.com/docs/installation) + [less](https://lesscss.org/)
- [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) + [axios](https://github.com/axios/axios)
- [jotai](https://jotai.org/)
- [antd@5](https://ant-design.antgroup.com/index-cn)
- eslint@8 + prettier
- typescript

## 额外说明

### pnpm

推荐使用 [pnpm](https://pnpm.io/)，有关 pnpm 导致的问题，已在 `.npmrc` 中解决。

### eslint 版本问题

目前 vite@5 默认使用 eslint@8；但 eslint 最新版本是 v9，与 vite 的配置不契合，因此先不要升级 eslint

## jotai 而不是其他

[与其他比较](https://jotai.org/docs/basics/comparison)

对比 Zustand, Recoil, Redux；jotai 拥有更简单易用的 api，因其原子级别的设计，可以与其他很多工具库（如 rxjs）相结合，甚至可以自定义，学习曲线相对平缓许多。

### 全局类型

业务类的全局类型请在 `types` 文件夹中定义，并使用 `namespace` 模式

### 数据请求（typescript）

在 axios 拦截器中需要对返回的数据进行处理；对应的类型会有所不同；请阅读 `src/utils/http.ts` 中的描述

### 开发体验

推荐使用以下 vscode 插件

- eslint
- prettier
- Tailwind CSS IntelliSense tailwindcss 的代码提示
- git-commit-plugin 用于优化 commit 格式
- Codeium 免费的 AI 代码提示工具

编辑器配置项

```json
//  settings.json
{
  "editor.codeActionsOnSave": {
    // 自动排序 import
    // 自动合并模块
    // 自动删掉未使用的模块
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

安装和配置 fira code 字体

[FiraCode](https://github.com/tonsky/FiraCode) 是一款适用于代码的等宽字体，并支持连字符模式，可提高代码可读性

```json
//  settings.json
{
  "editor.fontFamily": "'Fira Code', Menlo, Monaco, 'Courier New', monospace",
  // 开启连字符功能
  "editor.fontLigatures": true
}
```
