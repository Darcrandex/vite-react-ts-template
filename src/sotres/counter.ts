import { sleep } from '@/utils'
import { useBoolean } from 'ahooks'
import { atom, PrimitiveAtom, useAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'

const couter = atomFamily<string, PrimitiveAtom<number>>(() => atom(0))

export function useCounter(id = '') {
  const [count, setCount] = useAtom(couter(id))
  const [isLoading, { toggle }] = useBoolean()
  const inc = () => setCount((c) => c + 1)
  const decSync = async () => {
    toggle()
    await sleep(1000)
    setCount((c) => c - 1)
    toggle()
  }

  return { count, inc, decSync, isLoading }
}
