import styled from "./Home.module.scss"
import Icon from "components/Icon"
import Toolbars from "containers/Toolbars"
import SearchBar from "components/SearchBar"
import AdCard from "./AdCard"
import Button from "components/Button"
import CaseCard from "containers/CaseCard"
import Consulting from "./Consulting"
import { useRef, useState, useCallback, useEffect } from "react"
import Banner from "containers/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useGetAdCardsQuery } from "./Home.graphql.generated"
import { useGetCasesQuery } from "graphql/queries/getCases.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { SortEnumType } from "types/schema"

const Home = () => {
  const [consult, setConsult] = useState(false)
  const go = useGo()
  const auth = useAuth()
  const cursorRef = useRef<string>("")
  const getCasesQuery = useGetCasesQuery({ variables: { after: null } })
  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })
  const getAdCardsQuery = useGetAdCardsQuery()
  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "首頁輪播",
    },
  })
  const cases = getCasesQuery?.data?.cases?.nodes
  const edges = getCasesQuery?.data?.cases?.edges || []
  const adCards = getAdCardsQuery?.data?.adCards?.nodes
  const adImages = getAdImagesQuery?.data?.adImages?.edges
    ?.map(el => ({
      image: el.node?.image || "",
      clinicId: el.node?.clinicId || "",
      targetId: el.node?.targetId || "",
      redirectType: el.node?.redirectType,
      sort: el.node?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

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

  const list = []
  const casesCount = cases?.length || 0
  const adCount = adCards?.length || 0
  for (let i = 0; i <= Math.max(casesCount, adCount); i += 1) {
    for (let j = 0; j < 3; j++) {
      const idx = i * 3 + j

      if (cases && cases[idx]) {
        list.push(
          <CaseCard
            key={cases[idx]?.id}
            amount={cases[idx]?.collectedCount}
            isCollected={
              getCollectedCaseQuery?.data?.me?.userCollectedCases?.some(
                el => el?.id === cases[idx]?.id,
              ) || false
            }
            title={cases[idx]?.title || ""}
            clinic={cases[idx]?.clinic?.name || "　"}
            clinicId={cases[idx]?.clinic?.id || ""}
            introduction={cases[idx]?.description || ""}
            images={[cases[idx]?.beforeImage || "", cases[idx]?.afterImage || ""]}
            tags={cases[idx]?.categories?.map(tag => tag?.name || "")}
            caseId={cases[idx]?.id || ""}
            last={casesCount - 1 === idx}
            fetchMore={() => {
              getCasesQuery?.data?.cases?.pageInfo?.hasNextPage && fetchMore()
            }}
          />,
        )
      }
    }

    if (adCards && adCards[i]) {
      list.push(
        <AdCard
          key={adCards[i]?.id}
          id={adCards[i]?.id || ""}
          title={adCards[i]?.title || ""}
          content={adCards[i]?.content || ""}
          image={adCards[i]?.image || ""}
        />,
      )
    }
  }

  useEffect(() => {
    if (auth.user.id) loadGetCollectedCaseQuery()
  }, [auth.user.id, loadGetCollectedCaseQuery])

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
          </div>
        </div>
        <div className={styled.inner}>
          <Banner images={adImages} />
          {list}
          <div className={styled.filter}>
            <Button
              className={styled.button}
              onClick={() => (auth?.user?.id ? setConsult(true) : go.toSignIn())}>
              <Icon name="notePencil" className={styled.notePencil} />
              匿名諮詢
            </Button>
            <Consulting
              open={consult}
              onClose={() => {
                setConsult(false)
              }}
            />
          </div>
        </div>
      </div>
      {auth.user.clinic ? <Toolbars.Clinic /> : <Toolbars />}
    </>
  )
}
export default Home
