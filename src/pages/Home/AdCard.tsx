import styled from "./Home.module.scss"
import { useGo } from "components/Router"

const AdCard = () => {
  const go = useGo()

  return (
    <div className={styled["ad-card"]} onClick={go.toAdvertisement}>
      <div className={styled.title}>全新臉部拉提計畫</div>
      <div className={styled.content}>
        <div className={styled.pic} />
        <div className={styled.text}>
          網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
        </div>
      </div>
    </div>
  )
}

export default AdCard
