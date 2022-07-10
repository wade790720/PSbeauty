import cx from "classnames"
import HistoryRecordCard from "components/HistoryRecordCard"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useAuth } from "hooks/useAuth"
import { useParams } from "react-router-dom"
import { useGeTopicDetailQuery } from "./Chatroom.graphql.generated"
import styled from "./Chatroom.module.scss"
import Front from "./Front.png"
import Left from "./Left.png"
import Right from "./Right.png"
import { ReactComponent as UploadImage } from "./UploadImage.svg"

const Chatroom = () => {
  const { id } = useParams()
  const auth = useAuth()

  const response = useGeTopicDetailQuery({
    variables: {
      input: id!,
    },
  })

  if (response.loading) {
    return <div>loading</div>
  }

  const clinic = response.data?.topic?.clinic
  const consult = response.data?.topic?.consult
  const replies = response.data?.topic?.replies || []

  return (
    <>
      <Header leftArrow title={clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <div className={cx(styled.row, styled.center)}>
          <div className={styled.time}>Yesterday 9:41</div>
        </div>
        <div className={cx(styled.row, styled.center)}>
          <HistoryRecordCard
            title={consult?.subject || ""}
            date="2022-05-18｜剩餘3天"
            images={[Left, Front, Right]}
            introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介...顯示更多"
            tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
          />
        </div>
        {replies?.map(v => {
          if (v?.userId == auth.user.id) {
            return (
              <div className={cx(styled.row, styled.right)} key={v?.id}>
                <div className={styled.message}>{v?.content}</div>
              </div>
            )
          } else {
            return (
              <div className={cx(styled.row, styled.left)} key={v?.id}>
                <img className={styled.avatar} src="/img/chatroom-user.png" />
                <div className={styled.message}>{v?.content}</div>
              </div>
            )
          }
        })}
      </Backdrop>
      <div className={styled.input}>
        <div className={styled.control}>
          <UploadImage />
          <input />
          <div className={styled.submit}>送出</div>
        </div>
      </div>
    </>
  )
}
export default Chatroom
