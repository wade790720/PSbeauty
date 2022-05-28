import styled from "./NoData.module.scss"
import { useMemo } from "react"
import { ReactComponent as NoDataIcon } from "./noData.svg"

export type NoDataProps = {
  width?: number
  height?: number
}

export default function NoData({ width, height }: NoDataProps) {
  const style = useMemo(() => {
    const _style: { width?: number; height?: number } = {}
    if (width) _style.width = width
    if (height) _style.height = height
    return _style
  }, [width, height])

  return (
    <div className={styled.wrapper} style={style}>
      <NoDataIcon />
      <div className={styled.text}>暫無資料顯示</div>
    </div>
  )
}
