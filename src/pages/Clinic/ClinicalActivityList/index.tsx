import useState from "react-usestateref"
import { useEffect, useCallback } from "react"
import styled from "./ClinicalActivityList.module.scss"
import Banner from "containers/Banner"
import ActivityCard from "pages/Clinic/ClinicActivities/ActivityCard"
import Toolbars from "containers/Toolbars"
import SearchBar from "containers/SearchBar"
import Icon from "components/Icon"
import useGo from "components/Router/useGo"
import QueryStatus from "components/QueryStatus"
import { useAuth } from "hooks/useAuth"
import { useGetActivitiesQuery } from "./ClinicalActivityList.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { SortEnumType } from "types/schema"
import PullToRefresh from "react-simple-pull-to-refresh"
import Loading from "components/Loading"

export type ActivitiesArray = Array<{
  cursor: string
  node?: {
    id?: string | null
    image?: string | null
    subject?: string | null
    content?: string | null
    clinic?: { id?: string | null } | null
  } | null
}> | null

const ClinicalActivityList = () => {
  const [activities, setActivities, activitiesRef] = useState<ActivitiesArray>([])
  const auth = useAuth()
  const go = useGo()

  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })
  const getActivitiesQuery = useGetActivitiesQuery({
    onCompleted: data => {
      const edges = [
        ...(data?.activities?.edges || []).map((el, idx) => {
          return {
            cursor: el.cursor,
            node: data?.activities?.nodes?.[idx],
          }
        }),
      ]
      edges.sort(() => Math.random() - 0.5)
      setActivities([...(activitiesRef?.current || []), ...edges])
    },
  })
  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()

  const refetchActivitiesQuery = useCallback(() => {
    getActivitiesQuery.refetch().then(res => {
      setActivities([])
      const edges = [
        ...(res?.data?.activities?.edges || []).map((el, idx) => {
          return {
            cursor: el.cursor,
            node: res?.data?.activities?.nodes?.[idx],
          }
        }),
      ]
      edges.sort(() => Math.random() - 0.5)
      setActivities([...edges])
    })
  }, [getActivitiesQuery])

  const count = activities?.length || 0
  const adImages = getAdImagesQuery?.data?.adImages?.edges
    ?.map(el => ({
      image: el.node?.image || "",
      clinicId: el.node?.clinicId || "",
      targetId: el.node?.targetId || "",
      redirectType: el.node?.redirectType,
      sort: el.node?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  const fetchMore = useCallback(() => {
    if (getActivitiesQuery?.data?.activities?.pageInfo?.hasNextPage) {
      const edges = getActivitiesQuery?.data?.activities?.edges
      const after = edges?.[edges.length - 1]?.cursor || null
      getActivitiesQuery.fetchMore({
        variables: {
          after,
        },
        updateQuery: (__, { fetchMoreResult }) => {
          return fetchMoreResult
        },
      })
    }
  }, [getActivitiesQuery])
  const consults = getMemberInboxQuery.data?.me?.consults || []

  const refresh = useCallback(() => {
    getAdImagesQuery.refetch({
      first: 5,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    })
    refetchActivitiesQuery()
  }, [getAdImagesQuery, refetchActivitiesQuery])

  if (getActivitiesQuery.error || getAdImagesQuery.error) return <QueryStatus.Error />

  return (
    <>
      {getActivitiesQuery.loading && getAdImagesQuery.loading ? (
        <QueryStatus.Loading />
      ) : (
        <div className={styled.wrapper}>
          <div className={styled.header}>
            <SearchBar onInputClick={() => go.toSearchList("")} />
            <div
              onClick={() => {
                auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
              }}>
              <Icon name="chat" className={styled["chat-icon"]} />
              {consults.length > 1 &&
                consults.map(consult => consult?.userInboxes?.some(el => !el?.read)) && (
                  <div className={styled["chat-unread"]} />
                )}
            </div>
          </div>
          <PullToRefresh onRefresh={async () => refresh()} refreshingContent={Loading()}>
            <div className={styled.inner}>
              <Banner images={adImages} />
              {activities?.map((el, idx) => (
                <ActivityCard
                  key={el?.node?.id}
                  activityId={el?.node?.id || ""}
                  clinicId={el?.node?.clinic?.id || ""}
                  subject={el?.node?.subject || ""}
                  content={el?.node?.content || ""}
                  image={el?.node?.image || ""}
                  last={count === idx + 1}
                  fetchMore={() => fetchMore()}
                />
              ))}
            </div>
          </PullToRefresh>
        </div>
      )}
      <Toolbars />
    </>
  )
}
export default ClinicalActivityList
