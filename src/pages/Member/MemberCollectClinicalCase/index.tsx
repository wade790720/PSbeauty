import styled from "./MemberCollectClinicalCase.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "components/CaseCard"
import { useGetMeQuery } from "./MemberCollectClinicalCase.graphql.generated"

const MemberCollectClinicalCase = () => {
  const { data, loading } = useGetMeQuery()
  return (
    <>
      <Header title="收藏案例" leftArrow />
      <div className={styled.wrapper}>
        {data?.me?.userCollectedCases?.map(el => (
          <CaseCard
            key={el?.id}
            isCollected
            title={el?.title || ""}
            clinic={el?.clinic?.name || ""}
            clinicId={el?.clinic?.id || ""}
            introduction={el?.description || ""}
            images={[el?.beforeImage || "", el?.afterImage || ""]}
            tags={el?.categories?.map(el => el?.name || "")}
            caseId={el?.id || ""}
          />
        ))}
        {/* <CaseCard
          isCollected
          title="臉部拉提改善面部線條A"
          clinic="玉辛醫美診所"
          clinicId="1"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={["", ""]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
          caseId="1"
        />
        <CaseCard
          isCollected
          title="臉部拉提改善面部線條B"
          clinic="玉辛醫美診所"
          clinicId="2"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={["", ""]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
          caseId="1"
        />
        <CaseCard
          isCollected
          title="臉部拉提改善面部線條C"
          clinic="玉辛醫美診所"
          clinicId="3"
          introduction="網友熱門討論項目大都集中在面部雷射光療，以及肉毒桿菌醫學美容，解決不少有咀嚼肌的問題"
          images={["", ""]}
          tags={["蘋果肌1", "蘋果肌2", "蘋果肌3", "蘋果肌4", "蘋果肌5"]}
          caseId="1"
        /> */}
      </div>
    </>
  )
}
export default MemberCollectClinicalCase
