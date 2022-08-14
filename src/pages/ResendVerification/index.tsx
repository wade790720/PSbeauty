import styled from "./ResendVerification.module.scss"
import Form from "components/Form"
import Button from "components/Button"
import Modal from "components/Modal"
import { useState } from "react"
import { useGo } from "components/Router"
import { SubmitHandler, useForm } from "react-hook-form"
import * as FirebaseClient from "firebaseClient"

type Inputs = {
  account: string
  password: string
}

const SignIn = () => {
  const go = useGo()
  const [message, setMessage] = useState("")
  const { register, handleSubmit } = useForm<Inputs>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<Inputs> = async info => {
    try {
      await FirebaseClient.resendEmailVerificationByLogin(info.account, info.password)
      setMessage("發送成功")
    } catch (e) {
      if (/too-many-requests/.test(`${e}`)) {
        setMessage("驗證信已寄送")
      } else {
        setMessage("帳號密碼錯誤，請重新輸入")
      }
    }
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>重發驗證信件</div>
      <div className={styled.subtitle}>歡迎回來！請輸入你的資料</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input type="text" placeholder="帳號" {...register("account")} />
        <Form.Input type="password" placeholder="密碼" {...register("password")} />
        <Button variant="transparent" type="submit">
          重新發送
        </Button>
        <Button variant="transparent" type="button" onClick={go.toHome}>
          訪客登入
        </Button>
        <Modal title="訊息" open={!!message} confirmText="確定" onClose={() => setMessage("")}>
          {message}
        </Modal>
      </Form>
      <div className={styled.actions}>
        <div />
        <div onClick={go.toForgotPassword}>忘記密碼</div>
        <div>|</div>
        <div onClick={go.toRegister}>註冊帳號</div>
        <div />
      </div>
    </div>
  )
}
export default SignIn
