import styled from "./ClinicActivities.module.scss"
import useGo from "components/Router/useGo"
import { useMatch } from "react-router-dom"

export type ActivityCardProps = {
  subject?: string
  content?: string
  image?: string
}

const ActivityCard = ({ ...props }: ActivityCardProps) => {
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
      <div className={styled.title}>{props?.subject}</div>
      <div className={styled.content}>
        <img className={styled.pic} src={props?.image} />
        <div className={styled.text}>{props?.content}</div>
      </div>
    </div>
  )
}

export default ActivityCard
