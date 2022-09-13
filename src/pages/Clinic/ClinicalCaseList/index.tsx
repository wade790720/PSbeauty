import { useState, useEffect, useCallback, useRef } from "react"
import styled from "./ClinicalCaseList.module.scss"
import Icon from "components/Icon"
import Toolbars from "containers/Toolbars"
import SearchBar from "containers/SearchBar"
import Button from "components/Button"
import CaseCard from "containers/CaseCard"
import SubjectFilter from "containers/SubjectFilter"
import Banner from "containers/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useGetTopCategoriesLazyQuery } from "./ClinicalCaseList.graphql.generated"
import {
  useGetCasesQuery,
  useGetSpecifyCasesLazyQuery,
} from "graphql/queries/getCases.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { SortEnumType } from "types/schema"

const ClinicalCaseList = () => {
  const auth = useAuth()
  const go = useGo()
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState(false)
  const cursorRef = useRef<string>("")
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const getCasesQuery = useGetCasesQuery()

  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()
  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })
  const [loadGetSpecifyCasesLazy, getSpecifyCasesLazy] = useGetSpecifyCasesLazyQuery()
  const edges = filter
    ? getSpecifyCasesLazy?.data?.cases?.edges || []
    : getCasesQuery?.data?.cases?.edges || []
  const nodes = filter ? getSpecifyCasesLazy?.data?.cases?.nodes : getCasesQuery?.data?.cases?.nodes
  const adImageCaseQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "案例輪播",
    },
  })
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
    if (!open) return
    loadQuery()
  }, [open])

  useEffect(() => {
    if (auth.user.id) loadGetCollectedCaseQuery()
  }, [auth.user.id, loadGetCollectedCaseQuery])

  const fetchMore = useCallback(() => {
    const after = edges?.[edges.length - 1]?.cursor || null
    const target = filter ? getSpecifyCasesLazy : getCasesQuery
    target.fetchMore({
      variables: {
        after,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (
          !after ||
          after === cursorRef?.current ||
          !fetchMoreResult?.cases?.edges ||
          !prevResult?.cases?.edges ||
          prevResult?.cases?.edges.length > edges.length
        )
          return prevResult

        fetchMoreResult.cases.edges = [
          ...(prevResult?.cases?.edges || []),
          ...(fetchMoreResult?.cases?.edges || []),
        ]

        fetchMoreResult.cases.nodes = [
          ...(prevResult.cases?.nodes || []),
          ...(fetchMoreResult?.cases?.nodes || []),
        ]
        cursorRef.current = after
        return fetchMoreResult
      },
    })
  }, [edges, getCasesQuery, getSpecifyCasesLazy])
  const consults = getMemberInboxQuery.data?.me?.consults || []

  return (
    <>
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
            <CaseCard
              key={el?.id}
              isCollected={
                getCollectedCaseQuery?.data?.me?.userCollectedCases?.some(
                  item => item?.id === el?.id,
                ) || false
              }
              title={el?.title || ""}
              clinic={el?.clinic?.name || ""}
              clinicId={el?.clinic?.id || ""}
              introduction={el?.description || ""}
              image={el?.image || ""}
              tags={el?.categories?.map(el => el?.name || "")}
              caseId={el?.id || ""}
              last={(nodes && nodes?.length - 1 === idx) || false}
              fetchMore={() => {
                getCasesQuery?.data?.cases?.pageInfo?.hasNextPage && fetchMore()
              }}
            />
          ))}
          <div className={styled.filter}>
            <Button className={styled.button} onClick={() => setOpen(true)}>
              <Icon name="funnel" className={styled.funnel} />
              分類篩選
            </Button>
            <SubjectFilter
              open={open}
              onClose={() => setOpen(false)}
              getValue={value => {
                if (value.length === 0) return setFilter(false)
                loadGetSpecifyCasesLazy({
                  variables: {
                    searchKeys: value.map(el => ({ eq: el.id || "" })),
                  },
                })
                setFilter(true)
              }}
              topCategoriesQuery={query}
              defaultValue={[]}
            />
          </div>
        </div>
      </div>
      <Toolbars />
    </>
  )
}
export default ClinicalCaseList
