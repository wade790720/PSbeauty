import { useEffect, useCallback, useRef } from "react"
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
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { SortEnumType } from "types/schema"

const ClinicalActivityList = () => {
  const auth = useAuth()
  const go = useGo()
  const cursorRef = useRef<string>("")

  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()
  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })
  const getActivitiesQuery = useGetActivitiesQuery()
  const adImageCaseQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })

  const edges = getActivitiesQuery?.data?.activities?.edges || []
  const nodes = getActivitiesQuery?.data?.activities?.nodes

  const adImages = adImageCaseQuery?.data?.adImages?.edges
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

  useEffect(() => {
    if (auth.user.id) loadGetCollectedCaseQuery()
  }, [auth.user.id, loadGetCollectedCaseQuery])

  const fetchMore = useCallback(() => {
    const after = edges?.[edges.length - 1]?.cursor || null
    const target = getActivitiesQuery
    target.fetchMore({
      variables: {
        after,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (
          !after ||
          after === cursorRef?.current ||
          !fetchMoreResult?.activities?.edges ||
          !prevResult?.activities?.edges ||
          prevResult?.activities?.edges.length > edges.length
        )
          return prevResult

        fetchMoreResult.activities.edges = [
          ...(prevResult?.activities?.edges || []),
          ...(fetchMoreResult?.activities?.edges || []),
        ]

        fetchMoreResult.activities.nodes = [
          ...(prevResult.activities?.nodes || []),
          ...(fetchMoreResult?.activities?.nodes || []),
        ]
        cursorRef.current = after
        return fetchMoreResult
      },
    })
  }, [edges, getActivitiesQuery])
  const consults = getMemberInboxQuery.data?.me?.consults || []

  if (getActivitiesQuery.error) return <QueryStatus.Error />

  return (
    <>
      {getActivitiesQuery.loading ? (
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
          <div className={styled.inner}>
            <Banner images={adImages} />
            {nodes?.map((el, idx) => (
              <ActivityCard
                key={el?.id}
                activityId={el?.id || ""}
                subject={el?.subject || ""}
                content={el?.content || ""}
                image={el?.image || ""}
                last={(nodes && nodes?.length - 1 === idx) || false}
                fetchMore={() => {
                  getActivitiesQuery?.data?.activities?.pageInfo?.hasNextPage && fetchMore()
                }}
              />
            ))}
          </div>
        </div>
      )}

      <Toolbars />
    </>
  )
}
export default ClinicalActivityList
