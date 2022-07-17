import { useState, useEffect } from "react"
import styled from "./ClinicalCaseList.module.scss"
import Icon from "components/Icon"
import BottomNavigation from "components/BottomNavigation"
import SearchBar from "components/SearchBar"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import imgBefore from "pages/Member/MemberCollectClinicalCase/Before.png"
import imgAfter from "pages/Member/MemberCollectClinicalCase/After.png"
import SubjectFilter from "components/SubjectFilter"
import Banner from "components/Banner"
import { useGetTopCategoriesLazyQuery } from "./ClinicalCaseList.graphql.generated"

const ClinicalCaseList = () => {
  const [open, setOpen] = useState(false)
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.header}>
          <SearchBar />
          <Icon name="chat" className={styled["chat-icon"]} />
        </div>
        <Banner />
        <CaseCard
          isCollected
          title="臉部拉提改善面部線條A"
          clinic="玉辛醫美診所"
          clinicId="2"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
        <CaseCard
          isCollected
          title="臉部拉提改善面部線條A"
          clinic="玉辛醫美診所"
          clinicId="3"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
        <Button className={styled.button} onClick={() => setOpen(true)}>
          <Icon name="funnel" className={styled.funnel} />
          分類篩選
        </Button>
        <SubjectFilter
          open={open}
          onClose={() => setOpen(false)}
          getValue={value => console.log(value)}
          topCategories={query?.data?.topCategories?.map(el => el?.name || "")}
          query={query}
        />
      </div>
      <BottomNavigation />
    </>
  )
}
export default ClinicalCaseList
