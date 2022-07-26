import styled from "./MemberConsultationRecord.module.scss"
import Header from "components/Layout/Header"
import HistoryRecordCard from "components/HistoryRecordCard"
import Left from "./Left.png"
import Front from "./Front.png"
import Right from "./Right.png"
import { useGetMeQuery } from "./MemberConsultationRecord.graphql.generated"
import Loading from "components/QueryStatus/Loading"

const MemberConsultationRecord = () => {
  const { data, loading } = useGetMeQuery()

  if (loading) return <Loading />
  return (
    <>
      <Header title="諮詢歷史紀錄件夾" leftArrow />
      <div className={styled.wrapper}>
        <HistoryRecordCard
          title="側臉線條"
          date="2022-05-18｜剩餘3天"
          toggle={true}
          images={[Left, Front, Right]}
          introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介，僅供參考排版樣式，內容簡介"
          tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
        />
        <HistoryRecordCard
          title="側臉線條"
          date="2022-05-18｜剩餘3天"
          toggle={false}
          images={[Left, Front, Right]}
          introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介，僅供參"
          tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
        />
        <HistoryRecordCard
          title="側臉線條"
          date="2022-05-18｜剩餘3天"
          toggle={false}
          images={[Left, Front, Right]}
          introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介，僅供"
          tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
        />
        <HistoryRecordCard
          title="側臉線條"
          date="2022-05-18｜剩餘3天"
          toggle={false}
          images={[Left, Front, Right]}
          introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介"
          tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
        />
      </div>
    </>
  )
}
export default MemberConsultationRecord
