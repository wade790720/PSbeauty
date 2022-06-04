import styled from "./Register.module.scss"
import cx from "classnames"
import Form from "components/Form"
import Button from "components/Button"

const ForgotPassword = () => {
  return (
    <div className={cx(styled.wrapper)}>
      <div className={cx(styled.title)}>註冊你的帳戶</div>
      <div className={cx(styled.subtitle)}>歡迎加入！請輸入你的資料</div>
      <Form>
        <Form.Input type="text" placeholder="帳號" />
        <Form.Input type="password" placeholder="密碼" />
        {/* <InputGroup>
          <Form.Input type="password" placeholder="密碼" />
          <Append>
            <button className={styled["search-icon"]}>
              <Icon name="search" />
            </button>
          </Append>
        </InputGroup> */}
        <Form.Input type="text" placeholder="名稱" />
        <Form.Input type="text" placeholder="電話" />
        <Button variant="transparent">註冊</Button>
      </Form>
      <div className={cx(styled.actions)}>
        <div />
        <div>忘記密碼</div>
        <div>|</div>
        <div>已有帳號</div>
        <div />
      </div>
    </div>
  )
}
export default ForgotPassword
