import styled from "./ClinicActivities.module.scss"
import useGo from "components/Router/useGo"
import { useMatch } from "react-router-dom"

const ActivityCard = () => {
  const go = useGo()
  const match = useMatch("/clinic/:id/inner/activities")

  return (
    <div
      className={styled["activity-card"]}
      onClick={() =>
        go.toClinicActivity({
          id: match?.params.id || "",
          activityId: "activityId",
        })
      }>
      <div className={styled.title}>VIP會員方案-玻尿酸享半價優惠</div>
      <div className={styled.content}>
        <div className={styled.pic} />
        <div className={styled.text}>
          網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌困擾的愛美女孩煩惱，讓臉我需要文字變長
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
