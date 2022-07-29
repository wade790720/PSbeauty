import { useState, useRef, useEffect, useCallback } from "react"

type useElementOnScreenProps = {
  root?: HTMLDivElement | null
  rootMargin?: string
  threshold?: number
}

const useElementOnScreen = ({
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
}: useElementOnScreenProps) => {
  const [ready, setReady] = useState(false)
  const targetRef = useRef<null | HTMLDivElement>(null)
  const containerRef = useCallback((node: HTMLDivElement) => {
    targetRef.current = node
    setReady(!!node)
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ready) return

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      { root, rootMargin, threshold },
    )

    targetRef?.current && observer.observe(targetRef.current)

    return () => {
      targetRef?.current && observer.unobserve(targetRef.current)
    }
  }, [root, rootMargin, threshold, ready])

  return { containerRef, isVisible }
}

export default useElementOnScreen
