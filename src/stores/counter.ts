import { atom, useRecoilState } from 'recoil'

function sleep(ms = 100) {
  return new Promise<void>((resole) => {
    const t = setTimeout(() => {
      clearTimeout(t)
      resole()
    }, ms)
  })
}

const countState = atom({ key: 'count', default: 0 })

export function useCounter() {
  const [count, setCount] = useRecoilState(countState)
  const add = () => setCount((curr) => curr + 1)
  const sub = async () => {
    await sleep(1000)
    setCount((curr) => curr - 1)
  }

  return { count, add, sub }
}
