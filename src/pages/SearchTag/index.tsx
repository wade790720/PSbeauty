import styled from "./SearchTag.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "containers/CaseCard"
import { useRef, useCallback, useEffect, useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import useGo from "components/Router/useGo"
import QueryStatus from "components/QueryStatus"
import { useAuth } from "hooks/useAuth"
import { useGetSpecifyCasesQuery } from "graphql/queries/getCases.graphql.generated"
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { saveState, getState } from "utils/stateSaver"

const SearchTag = () => {
  const go = useGo()
  const auth = useAuth()
  const { id, text } = useParams()
  const cursorRef = useRef<string>("")
  const innerRef = useRef<HTMLDivElement>(null)

  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })

  const getCasesQuery = useGetSpecifyCasesQuery({
    variables: { after: null, searchKeys: [{ eq: id }] },
  })
  const cases = getCasesQuery?.data?.cases?.nodes
  const edges = getCasesQuery?.data?.cases?.edges || []

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

  useEffect(() => {
    if (auth.user.id) {
      loadGetCollectedCaseQuery()
    }
  }, [auth.user.id, loadGetCollectedCaseQuery])

  if (getCasesQuery.error) return <QueryStatus.Error />

  useLayoutEffect(() => {
    if (getState("Feed")) {
      const { scrollY = 0 } = getState("Feed")
      innerRef?.current?.scrollTo(0, scrollY)
    }
  }, [innerRef?.current])

  useLayoutEffect(() => {
    const save = () => {
      saveState("Feed", { scrollY: innerRef?.current?.scrollTop || 0 })
    }
    innerRef?.current?.addEventListener("scroll", save)
    return () => innerRef?.current?.removeEventListener("scroll", save)
  }, [innerRef?.current])

  return (
    <>
      {getCasesQuery.loading ? (
        <QueryStatus.Loading />
      ) : (
        <div className={styled.wrapper}>
          <Header title={`關於 #${text} 搜尋結果`} leftArrow redirect={go.toHome} />
          <div className={styled.inner} ref={innerRef}>
            {cases?.map((el, idx) => (
              <CaseCard
                key={el?.id}
                amount={el?.collectedCount}
                isCollected={
                  getCollectedCaseQuery?.data?.me?.userCollectedCases?.some(
                    el => el?.id === el?.id,
                  ) || false
                }
                title={el?.title || ""}
                clinic={el?.clinic?.name || "　"}
                clinicId={el?.clinic?.id || ""}
                introduction={el?.description || ""}
                image={el?.image || ""}
                tags={el?.categories?.map(tag => ({
                  id: tag?.id || "",
                  name: tag?.name || "",
                }))}
                caseId={el?.id || ""}
                last={cases.length - 1 === idx}
                fetchMore={() => {
                  getCasesQuery?.data?.cases?.pageInfo?.hasNextPage && fetchMore()
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default SearchTag
