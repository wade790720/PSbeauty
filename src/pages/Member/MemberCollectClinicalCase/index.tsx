import styled from "./MemberCollectClinicalCase.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "components/CaseCard"
import imgBefore from "./Before.png"
import imgAfter from "./After.png"

const MemberCollectClinicalCase = () => {
  return (
    <>
      <Header title="收藏案例" leftArrow />
      <div className={styled.wrapper}>
        <CaseCard
          id="1"
          isCollected
          title="臉部拉提改善面部線條A"
          clinic="玉辛醫美診所"
          clinicId="1"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
        <CaseCard
          id="2"
          isCollected
          title="臉部拉提改善面部線條B"
          clinic="玉辛醫美診所"
          clinicId="2"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
        <CaseCard
          id="3"
          isCollected
          title="臉部拉提改善面部線條C"
          clinic="玉辛醫美診所"
          clinicId="3"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={[imgBefore, imgAfter]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
        />
      </div>
    </>
  )
}
export default MemberCollectClinicalCase
