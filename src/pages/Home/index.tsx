import styled from "./Home.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import AdCard from "./AdCard"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import imgBefore from "pages/Member/MemberCollectClinicalCase/Before.png"
import imgAfter from "pages/Member/MemberCollectClinicalCase/After.png"
import Consulting from "./Consulting"
import { useState } from "react"

const Home = () => {
  const [consult, setConsult] = useState(false)
  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <div className={styled.banner}>
          <div className={styled["banner-item"]}>banner-item</div>
          <div className={styled["banner-item"]}>banner-item</div>
        </div>
        <AdCard />
        <CaseCard
          amount="1.2K"
          isCollected={false}
          title="臉部拉提改善面部線條A"
          clinic="玉辛醫美診所"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <Button className={styled.button} onClick={() => setConsult(true)}>
          <Icon name="notePencil" className={styled.notePencil} />
          匿名諮詢
        </Button>
        <Consulting open={consult} onClose={() => setConsult(false)} />
      </div>
      <BottomNavigation />
    </>
  )
}
export default Home
