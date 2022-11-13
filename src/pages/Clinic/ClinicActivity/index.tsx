import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "./ClinicActivity.module.scss"
import { useAuth } from "hooks/useAuth"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import QueryStatus from "components/QueryStatus"
import { useGetClinicLazyQuery } from "./ClinicActivity.graphql.generated"
import {
  useGetCollectedActivitiesLazyQuery,
  useCollectActivityMutation,
  useRemoveCollectedActivityMutation,
} from "graphql/queries/collectActivities.graphql.generated"
import useGo from "components/Router/useGo"
import Icon from "components/Icon"

const ClinicActivity = () => {
  const { id, activityId } = useParams()
  const [loadQuery, { data, loading, error }] = useGetClinicLazyQuery()
  const go = useGo()
  const auth = useAuth()
  const [isCollected, setIsCollected] = useState(false)
  const [loadGetCollectedActivitiesQuery, getCollectedActivitiesQuery] =
    useGetCollectedActivitiesLazyQuery({
      fetchPolicy: "no-cache",
    })

  useEffect(() => {
    loadQuery({
      variables: {
        id: id || "",
      },
    })
  }, [loadQuery, id])

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
    setIsCollected(
      !!getCollectedActivitiesQuery?.data?.me?.userCollectedActivities?.find(
        el => el?.id === activityId,
      ),
    )
  }, [getCollectedActivitiesQuery?.data?.me?.userCollectedActivities])

  useEffect(() => {
    if (auth.user.id) loadGetCollectedActivitiesQuery()
  }, [auth.user.id])

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  const activities = data?.clinic?.activities?.filter(el => el?.id === activityId)[0]

  return (
    <>
      <Header leftArrow title={data?.clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <h2>診所活動</h2>
        <img className={styled.pic} src={activities?.image || ""} />
        <div className={styled.title}>{activities?.subject}</div>
        <div
          className={styled.clinic}
          onClick={() => go.toClinicInner({ id: id || "", tab: "info" })}>
          進入活動診所：{data?.clinic?.name}
        </div>
        <div
          className={styled.content}
          dangerouslySetInnerHTML={{ __html: activities?.content || "" }}
        />
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
          <Icon
            name={isCollected ? "BookmarkFill" : "BookmarkSimple"}
            className={styled["bookmark-simple"]}
          />
        </div>
      </Backdrop>
    </>
  )
}
export default ClinicActivity
