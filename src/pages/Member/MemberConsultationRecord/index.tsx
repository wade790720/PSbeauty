import cx from "classnames"
import styled from "./MemberConsultationRecord.module.scss"
import Header from "components/Layout/Header"
import HistoryRecordCard from "components/HistoryRecordCard"
import { useAuth } from "hooks/useAuth"
import { useGo } from "components/Router"
import {
  useGetMeQuery,
  useEnableConsultMutation,
} from "./MemberConsultationRecord.graphql.generated"
import Loading from "components/QueryStatus/Loading"
import dayjs from "dayjs"

const MemberConsultationRecord = () => {
  const { data, loading } = useGetMeQuery()
  const auth = useAuth()
  const go = useGo()
  const [enableConsultMutation] = useEnableConsultMutation()

  if (loading) return <Loading />
  if (!auth?.user?.id) {
    go.toSignIn()
    return <></>
  }

  return (
    <>
      <Header title="諮詢歷史紀錄件夾" leftArrow />
      <div className={cx(styled.wrapper, { [styled.empty]: !data?.me?.consults?.length })}>
        <div className={styled["empty-card"]}>尚無諮詢紀錄</div>
        {data?.me?.consults?.map(el => {
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
