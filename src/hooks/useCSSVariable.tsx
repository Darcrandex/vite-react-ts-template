import { useEffect, useState } from 'react'

/**
 * 获取css变量
 * @param varName - 变量名
 */
export function useCSSVariable(varName: string) {
  const [value, setValue] = useState<string>()
  useEffect(() => {
    const style = getComputedStyle(document.documentElement)
    setValue(style.getPropertyValue(varName).trim())
  }, [varName])

  return [value] as const
}
