import { makeAutoObservable, configure } from 'mobx'

export function createStore<T extends object>(store: T): T {
  // 关闭异步更新时,没有使用 runInAction 的警告
  // 但这样做是有风险的, 它的更新动作无法被跟踪

  // ifavailable 表示根据环境判断是否使用 Proxy
  configure({ enforceActions: 'never', useProxies: 'ifavailable' })

  // autoBind 允许在 store 中使用 this 来指代当前 store 实例
  return makeAutoObservable<T>(store, undefined, { autoBind: true })
}
