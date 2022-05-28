import styled from "./Error.module.scss"
import { useMemo } from "react"

type ErrorProps = {
  width?: number
  height?: number
}

export default function Error({ width, height = 100 }: ErrorProps) {
  const style = useMemo(() => {
    const _style: { width?: number; height?: number } = {}
    if (width) _style.width = width
    if (height) _style.height = height
    return _style
  }, [width, height])
  return (
    <div className={styled.wrapper} style={style}>
      error :(
    </div>
  )
}
