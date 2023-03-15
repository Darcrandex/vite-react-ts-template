import { sleep } from '@/utils'
import { useCallback, useState } from 'react'
import { atom, useRecoilState } from 'recoil'

const stateAtom = atom({ key: 'counter', default: { count: 0 } })

export function useCounter() {
  const [state, setState] = useRecoilState(stateAtom)
  const [loading, setLoading] = useState(false)

  const add = useCallback(() => setState((prev) => ({ ...prev, count: prev.count + 1 })), [setState])
  const sub = useCallback(() => {
    setLoading(true)
    sleep(1000).then(() => {
      setState((prev) => ({ ...prev, count: prev.count - 1 }))
      setLoading(false)
    })
  }, [setState])

  return { count: state.count, add, sub, loading }
}
