import { runInAction } from 'mobx'
import { createStore } from '../utils/create-mobx-store'

function sleep(ms = 1000) {
  return new Promise<void>((resolve) => {
    const t = setTimeout(() => {
      resolve()
      clearTimeout(t)
    }, ms)
  })
}

export const counter = createStore({
  count: 0,

  add() {
    this.count++
  },

  // 异步更新
  async sub() {
    await sleep()
    this.count--
  },

  async subAsync() {
    await sleep()

    // 使用 runInAction 更安全
    runInAction(() => {
      this.count--
    })
  },
})
