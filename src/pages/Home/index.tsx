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
import {
  useGetAdCardsQuery,
  useGetAdImagesQuery,
  useGetCasesLazyQuery,
} from "./Home.graphql.generated"

const Home = () => {
  const [consult, setConsult] = useState(false)
  const go = useGo()
  const auth = useAuth()
  const [getCasesLazyQuery, getCasesQuery] = useGetCasesLazyQuery()

  const getAdCardsQuery = useGetAdCardsQuery()
  const getAdImagesQuery = useGetAdImagesQuery()
  const cases = getCasesQuery?.data?.cases?.nodes
  const adCards = getAdCardsQuery?.data?.adCards?.nodes
  const adImages = getAdImagesQuery?.data?.adImages?.edges?.map(el => {
    return { image: el.node?.image || "", id: el.node?.targetId || "" }
  })

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
            isCollected={false}
            title={cases[idx]?.title || ""}
            clinic={cases[idx]?.clinic?.name || "　"}
            clinicId={cases[idx]?.id || ""}
            introduction={cases[idx]?.description || ""}
            images={[cases[idx]?.beforeImage || "", cases[idx]?.afterImage || ""]}
            tags={cases[idx]?.categories?.map(tag => tag?.name || "")}
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
          <SearchBar
            onChange={value => {
              getCasesLazyQuery({
                variables: {
                  contains: value,
                },
              })
            }}
            onInputClick={() => go.toSearchList("")}
          />
          <div
            onClick={() => {
              auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
            }}>
            <Icon name="chat" className={styled["chat-icon"]} />
          </div>
        </div>
        <Banner images={adImages} />
        {list}
        <Button
          className={styled.button}
          onClick={() => (auth?.user?.id ? setConsult(true) : go.toSignIn())}>
          <Icon name="notePencil" className={styled.notePencil} />
          匿名諮詢
        </Button>
        <Consulting
          open={consult}
          onClose={(result: string) => {
            setConsult(false)
          }}
        />
      </div>
      {auth.user.clinic ? <BottomNavigation.Chat /> : <BottomNavigation />}
    </>
  )
}
export default Home
