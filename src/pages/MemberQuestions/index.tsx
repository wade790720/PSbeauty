import styled from "./MemberQuestions.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"

const MemberQuestions = () => {
  return (
    <div className={styled.wrapper}>
      <Header title="常見問題" leftArrow />
      <Backdrop>
        <div className={styled.paragraph}>
          <div>1. 可列舉常見問題與情境範例文字？</div>
          <div>
            A.
            回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字。
          </div>
        </div>

        <div className={styled.paragraph}>
          <div>2. 可列舉常見問題與情境範例文字？</div>
          <div>
            A.
            回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字。
          </div>
        </div>

        <div className={styled.paragraph}>
          <div>3. 可列舉常見問題與情境範例文字？</div>
          <div>
            A.
            回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字，回答問題與情境範例文字。
          </div>
        </div>
      </Backdrop>
    </div>
  )
}
export default MemberQuestions
