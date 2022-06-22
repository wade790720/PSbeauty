import React, { useEffect } from "react"

type useOutsideEventProps = {
  refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[]
  onClickOutside: () => void
}
const useOutsideEvent = ({ refs, onClickOutside }: useOutsideEventProps) => {
  useEffect(() => {
    const containsTarget = (ref: React.RefObject<HTMLElement>, event: MouseEvent) => {
      return !(ref?.current && !ref?.current.contains(event.target as Node))
    }
    const handleClickOutside = (event: MouseEvent) => {
      const isClickOutside = Array.isArray(refs)
        ? refs.filter(ref => containsTarget(ref, event)).length === 0
        : containsTarget(refs, event)
      if (isClickOutside) onClickOutside()
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [refs, onClickOutside])
}

export default useOutsideEvent
