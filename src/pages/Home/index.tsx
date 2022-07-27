import styled from "./Home.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import AdCard from "./AdCard"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import Consulting from "./Consulting"
import { useEffect, useState } from "react"
import Banner from "components/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useGetAdCardsQuery, useGetCasesLazyQuery } from "./Home.graphql.generated"
import { useGetAdImagesQuery } from "graphql/queries/getAdImage.graphql.generated"
import { useGetCollectedCaseQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { SortEnumType } from "types/schema"

const Home = () => {
  const [consult, setConsult] = useState(false)
  const go = useGo()
  const auth = useAuth()
  const [getCasesLazyQuery, getCasesQuery] = useGetCasesLazyQuery()
  const getCollectedCaseQuery = useGetCollectedCaseQuery()
  const getAdCardsQuery = useGetAdCardsQuery()
  const getAdImagesQuery = useGetAdImagesQuery({
    variables: {
      first: 5,
      orderId: SortEnumType.Desc,
      where: "首頁輪播",
    },
  })
  const cases = getCasesQuery?.data?.cases?.nodes
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

  useEffect(() => {
    getCasesLazyQuery({
      variables: {
        contains: "",
      },
    })
  }, [])

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
          />,
        )
      }
    }

    if (adCards && adCards[i]) {
      list.push(
        <AdCard
          key={adCards[i]?.id}
          title={adCards[i]?.title || ""}
          content={adCards[i]?.content || ""}
          image={adCards[i]?.image || ""}
        />,
      )
    }
  }

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
      {auth.user.clinic ? <BottomNavigation.Chat /> : <BottomNavigation />}
    </>
  )
}
export default Home
