import { useEffect, useState } from "react"
import styled from "./ClinicActivities.module.scss"
import useGo from "components/Router/useGo"
import Icon from "components/Icon"
import { useAuth } from "hooks/useAuth"
import { useMatch } from "react-router-dom"
import {
  useGetCollectedActivitiesLazyQuery,
  useCollectActivityMutation,
  useRemoveCollectedActivityMutation,
} from "graphql/queries/collectActivities.graphql.generated"
import useElementOnScreen from "hooks/useElementOnScreen"

export type ActivityCardProps = {
  activityId: string
  clinicId?: string
  subject?: string
  content?: string
  image?: string
  last?: boolean
  fetchMore?: () => void
}

const ActivityCard = ({ activityId, ...props }: ActivityCardProps) => {
  const go = useGo()
  const auth = useAuth()
  const match = useMatch("/clinic/:id/inner/activities")
  const { containerRef, isVisible } = useElementOnScreen({})
  const [loadGetCollectedActivitiesQuery, getCollectedActivitiesQuery] =
    useGetCollectedActivitiesLazyQuery({
      fetchPolicy: "no-cache",
    })
  const [isCollected, setIsCollected] = useState(false)

  useEffect(() => {
    if (auth.user.id) loadGetCollectedActivitiesQuery()
  }, [auth.user.id])

  useEffect(() => {
    setIsCollected(
      !!getCollectedActivitiesQuery?.data?.me?.userCollectedActivities?.find(
        el => el?.id === activityId,
      ),
    )
  }, [getCollectedActivitiesQuery?.data?.me?.userCollectedActivities])

  const [collectActivityMutation] = useCollectActivityMutation({
    update(_, mutationResult) {
      if (mutationResult?.data?.collectActivity?.activityId) setIsCollected(true)
    },
  })

  const [removeCollectedActivityMutation] = useRemoveCollectedActivityMutation({
    update(_, mutationResult) {
      if (mutationResult?.data?.removeCollectedActivity?.activityId) setIsCollected(false)
    },
  })

  useEffect(() => {
    if (props.last && isVisible && props.fetchMore) props.fetchMore()
  }, [props.last, props.fetchMore, isVisible])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      className={styled["activity-card"]}
      onClick={() =>
        go.toClinicActivity({
          clinicId: match?.params.id || props.clinicId || "",
          activityId,
        })
      }>
      <div className={styled.title}>{props?.subject}</div>
      <div className={styled.content}>
        <img className={styled.pic} src={props?.image} />
        <div className={styled.text} dangerouslySetInnerHTML={{ __html: props?.content || "" }} />
      </div>
      <div
        className={styled["collect-block"]}
        onClick={e => {
          e.stopPropagation()
          if (!auth.user.id) return go.toSignIn()
          isCollected
            ? removeCollectedActivityMutation({
                variables: {
                  activityId: activityId || "",
                },
              })
            : collectActivityMutation({
                variables: {
                  activityId: activityId || "",
                },
              })
        }}>
        {isCollected ? (
          <Icon name="BookmarkFill" className={styled["bookmark-fill"]} />
        ) : (
          <Icon name="BookmarkSimple" className={styled["bookmark-simple"]} />
        )}
      </div>
    </div>
  )
}

export default ActivityCard
