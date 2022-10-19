import { useEffect } from "react"
import styled from "./ClinicActivities.module.scss"
import useGo from "components/Router/useGo"
import { useMatch } from "react-router-dom"
import useElementOnScreen from "hooks/useElementOnScreen"

export type ActivityCardProps = {
  activityId: string
  subject?: string
  content?: string
  image?: string
  last?: boolean
  fetchMore?: () => void
}

const ActivityCard = ({ activityId, ...props }: ActivityCardProps) => {
  const go = useGo()
  const match = useMatch("/clinic/:id/inner/activities")
  const { containerRef, isVisible } = useElementOnScreen({})

  useEffect(() => {
    if (props.last && isVisible && props.fetchMore) props.fetchMore()
  }, [props.last, props.fetchMore, isVisible])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      className={styled["activity-card"]}
      onClick={() =>
        go.toClinicActivity({
          clinicId: match?.params.id || "",
          activityId,
        })
      }>
      <div className={styled.title}>{props?.subject}</div>
      <div className={styled.content}>
        <img className={styled.pic} src={props?.image} />
        <div className={styled.text} dangerouslySetInnerHTML={{ __html: props?.content || "" }} />
      </div>
    </div>
  )
}

export default ActivityCard
