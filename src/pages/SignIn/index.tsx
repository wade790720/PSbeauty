import styled from "./SignIn.module.scss"
import Form from "components/Form"
import Button from "components/Button"

const SignIn = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>登入你的帳戶</div>
      <div className={styled.subtitle}>歡迎回來！請輸入你的資料</div>
      <Form>
        <Form.Input type="text" placeholder="帳號" />
        <Form.Input type="password" placeholder="密碼" />
        <Button variant="transparent">登入</Button>
        <Button variant="transparent">訪客登入</Button>
      </Form>
      <div className={styled.actions}>
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
