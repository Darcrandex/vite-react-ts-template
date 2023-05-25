import { useDebounceFn } from 'ahooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import Scrollbar from 'smooth-scrollbar'

export function useScroll(options?: { trackHideDelay?: number }) {
  const [isScrolling, setScrolling] = useState(false)
  const elRef = useRef<HTMLElement>(null)
  const sbRef = useRef<Scrollbar | null>(null)

  const onScrollStart = useCallback(() => {
    setScrolling(true)
  }, [])

  const { run: onScrollEnd } = useDebounceFn(() => setScrolling(false), { wait: options?.trackHideDelay || 1000 })

  useEffect(() => {
    if (elRef.current && !sbRef.current) {
      const sb = Scrollbar.init(elRef.current)

      // 当前版本无法让滚动轨道自动隐藏
      // 另辟蹊径
      sb.addListener(() => {
        onScrollStart()
        onScrollEnd()
      })

      sbRef.current = sb

      return () => {
        sb.destroy()
      }
    }
  }, [onScrollEnd, onScrollStart])

  return { elRef, isScrolling }
}
