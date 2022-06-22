import { useEffect, useRef } from "react"

function usePrevious<T>(value: T): T {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ref: any = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  return ref.current
}

export default usePrevious
