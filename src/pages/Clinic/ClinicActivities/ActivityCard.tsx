import styled from "./ClinicActivities.module.scss"
import useGo from "components/Router/useGo"

const ActivityCard = () => {
  const go = useGo()
  return (
    <div className={styled["activity-card"]} onClick={() => go.toClinicActivity({ id: "123" })}>
      <div className={styled.title}>VIP會員方案-玻尿酸享半價優惠</div>
      <div className={styled.content}>
        <div className={styled.pic} />
        <div className={styled.text}>
          網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉...
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
