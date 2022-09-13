import cx from "classnames"
import styled from "./MemberConsultationRecord.module.scss"
import Header from "components/Layout/Header"
import HistoryRecordCard from "containers/HistoryRecordCard"
import {
  useGetMeQuery,
  useEnableConsultMutation,
} from "./MemberConsultationRecord.graphql.generated"
import QueryStatus from "components/QueryStatus"
import dayjs from "dayjs"

const MemberConsultationRecord = () => {
  const { data, loading, error } = useGetMeQuery({ fetchPolicy: "no-cache" })
  const [enableConsultMutation] = useEnableConsultMutation()

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <>
      <Header title="諮詢歷史紀錄件夾" leftArrow />
      <div className={cx(styled.wrapper, { [styled.empty]: !data?.me?.consults?.length })}>
        <div className={styled["empty-card"]}>尚無諮詢紀錄</div>
        {[...(data?.me?.consults || [])]
          .sort((a, b) => {
            if (!a || !b) return 0
            return b.consultAt - a.consultAt
          })
          .filter(el => !el?.oneOnOne)
          ?.map(el => {
            const date = dayjs((el?.consultAt || 0) * 1000).format("YYYY-MM-DD")
            return (
              <HistoryRecordCard
                key={el?.id}
                id={el?.id || ""}
                title={el?.subject || ""}
                date={`${date}｜剩餘${el?.days}天`}
                toggle={el?.enable}
                images={el?.images?.map(el => el ?? "") || []}
                introduction={el?.content || ""}
                tags={el?.categories?.map(el => el?.name || "") || []}
                onChange={({ id, enable }: { id: string; enable: boolean }) => {
                  enableConsultMutation({
                    variables: {
                      id,
                      enable,
                    },
                  })
                }}
              />
            )
          })}
      </div>
    </>
  )
}
export default MemberConsultationRecord
