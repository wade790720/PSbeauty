import styled from "./MemberConsultationRecord.module.scss"
import Header from "components/Layout/Header"
import HistoryRecordCard from "components/HistoryRecordCard"
import { useAuth } from "hooks/useAuth"
import { useGo } from "components/Router"
import { useGetMeQuery } from "./MemberConsultationRecord.graphql.generated"
import Loading from "components/QueryStatus/Loading"
import dayjs from "dayjs"

const MemberConsultationRecord = () => {
  const { data, loading } = useGetMeQuery()
  const auth = useAuth()
  const go = useGo()

  if (loading) return <Loading />
  if (!auth?.user?.id) {
    go.toSignIn()
    return <></>
  }
  return (
    <>
      <Header title="諮詢歷史紀錄件夾" leftArrow />
      <div className={styled.wrapper}>
        {data?.me?.consults?.map(el => {
          const date = dayjs((el?.consultAt || 0) * 1000).format("YYYY-MM-DD")
          return (
            <HistoryRecordCard
              key={el?.id}
              title={el?.subject || ""}
              date={`${date}｜剩餘${el?.days}天`}
              toggle={true}
              images={el?.images?.map(el => el ?? "") || []}
              introduction={el?.content || ""}
              tags={el?.categories?.map(el => el?.name || "") || []}
            />
          )
        })}
      </div>
    </>
  )
}
export default MemberConsultationRecord
