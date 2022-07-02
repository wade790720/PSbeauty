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
import { useGetCasesQuery, useGetAdCardsQuery } from "./Home.graphql.generated"

const Home = () => {
  const [consult, setConsult] = useState(false)
  const go = useGo()
  const auth = useAuth()

  const getCasesQuery = useGetCasesQuery()
  const getAdCardsQuery = useGetAdCardsQuery()
  const cases = getCasesQuery?.data?.cases?.nodes
  const adCards = getAdCardsQuery?.data?.adCards?.nodes

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
        <Banner />
        {adCards?.map(el => (
          <AdCard
            key={el?.id}
            title={el?.title || ""}
            content={el?.content || ""}
            image={el?.image || ""}
          />
        ))}
        {cases?.map(el => (
          <CaseCard
            key={el?.id}
            amount={el?.collectedCount}
            isCollected={false}
            title={el?.title || ""}
            clinic={el?.clinic?.name || "　"}
            introduction={el?.description || ""}
            images={[el?.beforeImage || "", el?.afterImage || ""]}
            tags={el?.categories?.map(tag => tag?.name || "")}
          />
        ))}
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
