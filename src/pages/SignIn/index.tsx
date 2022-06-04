import styled from "./SignIn.module.scss"
import cx from "classnames"
import Form from "components/Form"
import Button from "components/Button"

const SignIn = () => {
  return (
    <div className={cx(styled.wrapper)}>
      <div className={cx(styled.title)}>登入你的帳戶</div>
      <div className={cx(styled.subtitle)}>歡迎回來！請輸入你的資料</div>
      <Form>
        <Form.Input type="text" placeholder="帳號" />
        <Form.Input type="password" placeholder="密碼" />
        <Button variant="transparent">登入</Button>
        <Button variant="transparent">訪客登入</Button>
      </Form>
      <div className={cx(styled.actions)}>
        <div />
        <div>忘記密碼</div>
        <div>|</div>
        <div>註冊帳號</div>
        <div />
      </div>
    </div>
  )
}
export default SignIn
