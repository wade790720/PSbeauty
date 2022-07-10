import cx from "classnames"
import HistoryRecordCard from "components/HistoryRecordCard"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useParams } from "react-router-dom"
import styled from "./Chatroom.module.scss"
import Front from "./Front.png"
import Left from "./Left.png"
import Right from "./Right.png"
import { ReactComponent as UploadImage } from "./UploadImage.svg"

const Chatroom = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <>
      <Header leftArrow title="玉辛醫美診所" />
      <Backdrop className={styled.wrapper}>
        <div className={cx(styled.row, styled.center)}>
          <div className={styled.time}>Yesterday 9:41</div>
        </div>
        <div className={cx(styled.row, styled.center)}>
          <HistoryRecordCard
            title="側臉線條"
            date="2022-05-18｜剩餘3天"
            images={[Left, Front, Right]}
            introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介...顯示更多"
            tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
          />
        </div>
        <div className={cx(styled.row, styled.right)}>
          <div className={styled.message}>您好，我有「全臉」相關問題想諮詢王重陽醫師。</div>
        </div>
        <div className={cx(styled.row, styled.left)}>
          <img className={styled.avatar} src="/img/chatroom-user.png" />
          <div className={styled.message}>
            您好！已收到您的諮詢，將會為您安排專業醫師在3日內進行回覆。
          </div>
        </div>
        <div className={cx(styled.row, styled.right)}>
          <div className={styled.message}>謝謝</div>
        </div>
        <div className={cx(styled.row, styled.left)}>
          <img className={styled.avatar} src="/img/chatroom-user.png" />
          <div className={styled.message}>不客氣</div>
        </div>
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
