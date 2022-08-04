import { useState, useEffect, useCallback, useRef } from "react"
import styled from "./ClinicalCaseList.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import SubjectFilter from "components/SubjectFilter"
import Banner from "components/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useGetTopCategoriesLazyQuery } from "./ClinicalCaseList.graphql.generated"
import { useGetCasesQuery } from "graphql/queries/getCases.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { SortEnumType } from "types/schema"

const ClinicalCaseList = () => {
  const auth = useAuth()
  const go = useGo()
  const [open, setOpen] = useState(false)
  const cursorRef = useRef<string>("")
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const getCasesQuery = useGetCasesQuery()
  const edges = getCasesQuery?.data?.cases?.edges || []

  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })
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

    getCasesQuery.fetchMore({
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
  }, [edges, getCasesQuery])

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar onInputClick={() => go.toSearchList("")} />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <div className={styled.inner}>
          <Banner images={adImages} />
          {getCasesQuery?.data?.cases?.nodes?.map((el, idx) => (
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
              images={[el?.beforeImage || "", el?.afterImage || ""]}
              tags={el?.categories?.map(el => el?.name || "")}
              caseId={el?.id || ""}
              last={
                (getCasesQuery?.data?.cases?.nodes &&
                  getCasesQuery?.data?.cases?.nodes?.length - 1 === idx) ||
                false
              }
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
              getValue={value => console.log(value)}
              topCategoriesQuery={query}
              defaultValue={[]}
            />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  )
}
export default ClinicalCaseList
