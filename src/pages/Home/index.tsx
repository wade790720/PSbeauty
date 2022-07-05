import styled from "./Home.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import AdCard from "./AdCard"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import Consulting from "./Consulting"
import { useState } from "react"
import Banner from "components/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useGetCasesQuery, useGetAdCardsQuery, useGetAdImagesQuery } from "./Home.graphql.generated"

const Home = () => {
  const [consult, setConsult] = useState(false)
  const go = useGo()
  const auth = useAuth()
  const getCasesQuery = useGetCasesQuery()
  const getAdCardsQuery = useGetAdCardsQuery()
  const getAdImagesQuery = useGetAdImagesQuery()
  const cases = getCasesQuery?.data?.cases?.nodes
  const adCards = getAdCardsQuery?.data?.adCards?.nodes
  const adImages = getAdImagesQuery?.data?.adImages?.edges?.map(el => el.node?.image)

  const list = []
  const casesCount = cases?.length || 0
  const adCount = adCards?.length || 0
  for (let i = 0; i <= Math.max(casesCount, adCount); i += 1) {
    if (cases && cases[i]) {
      list.push(
        <CaseCard
          key={cases[i]?.id}
          id={cases[i]?.id || ""}
          amount={cases[i]?.collectedCount}
          isCollected={false}
          title={cases[i]?.title || ""}
          clinic={cases[i]?.clinic?.name || "　"}
          clinicId={cases[i]?.id || ""}
          introduction={cases[i]?.description || ""}
          images={[cases[i]?.beforeImage || "", cases[i]?.afterImage || ""]}
          tags={cases[i]?.categories?.map(tag => tag?.name || "")}
        />,
      )
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
          <SearchBar />
          <div
            onClick={() => {
              auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
            }}>
            <Icon name="chat" className={styled["chat-icon"]} />
          </div>
        </div>
        <Banner images={adImages} />
        {list}
        <Button className={styled.button} onClick={() => setConsult(true)}>
          <Icon name="notePencil" className={styled.notePencil} />
          匿名諮詢
        </Button>
        <Consulting open={consult} onClose={() => setConsult(false)} />
      </div>
      {auth.user.clinic ? <BottomNavigation.Chat /> : <BottomNavigation />}
    </>
  )
}
export default Home
