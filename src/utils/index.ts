export function sleep(ms = 100) {
  return new Promise<void>((resolve) => {
    const t = setTimeout(() => {
      clearTimeout(t)
      resolve()
    }, ms)
  })
}
