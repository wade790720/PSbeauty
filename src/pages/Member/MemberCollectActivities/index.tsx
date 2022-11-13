import cx from "classnames"
import styled from "./MemberCollectActivities.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "containers/CaseCard"
// import { useGetMeQuery } from "./MemberCollectActivities.graphql.generated"
import QueryStatus from "components/QueryStatus"

const MemberCollectActivities = () => {
  // const { data, loading, error } = useGetMeQuery({ fetchPolicy: "no-cache" })

  // if (loading) return <QueryStatus.Loading />
  // if (error) return <QueryStatus.Error />
  return (
    <>
      <Header title="收藏活動" leftArrow />
      {/* <div
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
            image={el?.image || ""}
            tags={el?.categories?.map(tag => ({
              id: tag?.id || "",
              name: tag?.name || "",
            }))}
            caseId={el?.id || ""}
            last={false}
          />
        ))}
      </div> */}
    </>
  )
}
export default MemberCollectActivities
