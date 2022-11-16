import cx from "classnames"
import styled from "./MemberCollectClinicalCase.module.scss"
import Header from "components/Layout/Header"
import CaseCard from "containers/CaseCard"
import { useGetMeQuery } from "./MemberCollectClinicalCase.graphql.generated"
import QueryStatus from "components/QueryStatus"
import PullToRefresh from "react-simple-pull-to-refresh"
import Loading from "components/Loading"

const MemberCollectClinicalCase = () => {
  const { data, loading, error, refetch } = useGetMeQuery({ fetchPolicy: "no-cache" })

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />
  return (
    <>
      <Header title="收藏案例" leftArrow />
      <PullToRefresh
        onRefresh={() => refetch()}
        pullingContent={Loading.Static()}
        refreshingContent={Loading()}>
        <div className={styled["pull-to-refresh-wrapper"]}>
          <div
            className={cx(styled.wrapper, {
              [styled.empty]: !data?.me?.userCollectedCases?.length,
            })}>
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
          </div>
        </div>
      </PullToRefresh>
    </>
  )
}
export default MemberCollectClinicalCase
