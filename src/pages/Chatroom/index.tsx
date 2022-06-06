import styled from "./Chatroom.module.scss"
import cx from "classnames"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import { ReactComponent as UploadImage } from "./UploadImage.svg"

const Chatroom = () => {
  return (
    <>
      <Header leftArrow title="玉辛醫美診所" />
      <Backdrop className={styled.wrapper}>
        <div className={cx(styled.row, styled.center)}>
          <div className={styled.time}>Yesterday 9:41</div>
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
