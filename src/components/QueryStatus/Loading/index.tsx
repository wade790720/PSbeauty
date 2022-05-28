import styled from "./Loading.module.scss"
import { useMemo } from "react"

type LoadingProps = {
  width?: number
  height?: number
}

export default function Loading({ width, height }: LoadingProps) {
  const style = useMemo(() => {
    const _style: { width?: number; height?: number } = {}
    if (width) _style.width = width
    if (height) _style.height = height
    return _style
  }, [width, height])
  return (
    <div className={styled.wrapper} style={style}>
      <svg width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect x="15" y="30" width="10" height="40" fill="#85a2b6">
          <animate
            attributeName="opacity"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            values="1;0.2;1"
            begin="-0.6"
          />
        </rect>
        <rect x="35" y="30" width="10" height="40" fill="#bbcedd">
          <animate
            attributeName="opacity"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            values="1;0.2;1"
            begin="-0.4"
          />
        </rect>
        <rect x="55" y="30" width="10" height="40" fill="#dce4eb">
          <animate
            attributeName="opacity"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            values="1;0.2;1"
            begin="-0.2"
          />
        </rect>
        <rect x="75" y="30" width="10" height="40" fill="#fdfdfd">
          <animate
            attributeName="opacity"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
            values="1;0.2;1"
            begin="-1"
          />
        </rect>
      </svg>
    </div>
  )
}
