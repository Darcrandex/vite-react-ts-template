import { atom, useAtom } from 'jotai'
import { useCallback } from 'react'

const counterAtom = atom(0)

export function useCounter() {
  const [count, setCount] = useAtom(counterAtom)
  const inc = useCallback(() => setCount((c) => c + 1), [setCount])
  const dec = useCallback(() => setCount((c) => c - 1), [setCount])

  return { count, inc, dec }
}
