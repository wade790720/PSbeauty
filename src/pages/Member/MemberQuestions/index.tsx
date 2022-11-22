import styled from "./MemberQuestions.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"

const MemberQuestions = () => {
  return (
    <div className={styled.wrapper}>
      <Header title="常見問題" leftArrow />
      <Backdrop>
        <div className={styled.paragraph}>
          <div>台灣NO.1醫美整形App謝謝您的下載與使用</div>
          <div>
            我們打造最佳醫美整形平台，目的使求美者能更方便快速找到適合的診所與療程，我們也希望有任何建議或想加入的您給予我們更多的訊息。歡迎與我們聯繫。
            聯繫方式：psmaker@psbeauty.com.tw
          </div>
        </div>
      </Backdrop>
    </div>
  )
}
export default MemberQuestions
