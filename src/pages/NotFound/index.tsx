import { useGo } from "components/Router"
import styled from "./NotFound.module.scss"

export default function NotFound() {
  const go = useGo()
  return (
    <div className={styled.wrapper}>
      <div className={styled["http-404"]}>
        <div className={styled.title}>404</div>
        <div className={styled["sub-title"]}>Page Not Found (T⌓T)</div>
        <div className={styled.description}>
          哭哭～是不是打錯字惹？要回首頁就
          <a onClick={go.toHome}>點我</a>
        </div>
      </div>
    </div>
  )
}
