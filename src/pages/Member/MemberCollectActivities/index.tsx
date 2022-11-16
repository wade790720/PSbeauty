import Header from "components/Layout/Header"
import ActivityCard from "pages/Clinic/ClinicActivities/ActivityCard"
import { useGetCollectedActivitiesQuery } from "graphql/queries/collectActivities.graphql.generated"
import QueryStatus from "components/QueryStatus"
import styled from "./MemberCollectActivities.module.scss"
import cx from "classnames"
import PullToRefresh from "react-simple-pull-to-refresh"
import Loading from "components/Loading"

const MemberCollectActivities = () => {
  const { data, loading, error, refetch } = useGetCollectedActivitiesQuery({
    fetchPolicy: "no-cache",
  })

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <>
      <Header title="收藏活動" leftArrow />
      <PullToRefresh
        onRefresh={() => refetch()}
        pullingContent={Loading.Static()}
        refreshingContent={Loading()}>
        <div className={styled["pull-to-refresh-wrapper"]}>
          <div
            className={cx(styled.wrapper, {
              [styled.empty]: !data?.me?.userCollectedActivities?.length,
            })}>
            <div className={styled["empty-card"]}>尚無收藏活動</div>
            {data?.me?.userCollectedActivities?.map(el => (
              <ActivityCard
                key={el?.id}
                activityId={el?.id || ""}
                clinicId={el?.clinic?.id || ""}
                subject={el?.subject || ""}
                content={el?.content || ""}
                image={el?.image || ""}
              />
            ))}
          </div>
        </div>
      </PullToRefresh>
    </>
  )
}
export default MemberCollectActivities
