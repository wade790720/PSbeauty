import { useState } from "react"
import styled from "./Register.module.scss"
import Form from "components/Form"
import Button from "components/Button"
import Modal from "components/Modal"

const ForgotPassword = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>註冊你的帳戶</div>
      <div className={styled.subtitle}>歡迎加入！請輸入你的資料</div>
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
        <Button variant="transparent" onClick={() => setOpen(true)}>
          註冊
        </Button>
        <Modal title="密碼錯誤" open={open} confirmText="確定" onClose={() => setOpen(false)}>
          錯誤提示文字
        </Modal>
      </Form>
      <div className={styled.actions}>
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
