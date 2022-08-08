import cx from "classnames"
import styled from "./MemberCollectClinicalCase.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "containers/CaseCard"
import { useGetMeQuery } from "./MemberCollectClinicalCase.graphql.generated"
import Loading from "components/QueryStatus/Loading"

const MemberCollectClinicalCase = () => {
  const { data, loading } = useGetMeQuery({ fetchPolicy: "no-cache" })
  if (loading) return <Loading />
  return (
    <>
      <Header title="收藏案例" leftArrow />
      <div
        className={cx(styled.wrapper, { [styled.empty]: !data?.me?.userCollectedCases?.length })}>
        <div className={styled["empty-card"]}>尚無收藏案例</div>
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
            last={false}
          />
        ))}
      </div>
    </>
  )
}
export default MemberCollectClinicalCase
