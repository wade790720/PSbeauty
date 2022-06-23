import styled from "./SignIn.module.scss"
import Form from "components/Form"
import Button from "components/Button"
import Modal from "components/Modal"
import axios from "axios"
import { useState } from "react"
import { useGo } from "components/Router"
import { login } from "firebaseClient"
import { SubmitHandler, useForm } from "react-hook-form"
import { gql } from "@apollo/client"
import { endpoint, headers } from "utils/apiConfig"
import { setStorageValue } from "hooks/useLocalStorage"
import { print } from "graphql"
import { useAuth } from "hooks/useAuth"

type Inputs = {
  account: string
  password: string
}

const CUSTOM_TOKEN = gql`
  query {
    customToken {
      customToken
      uid
    }
  }
`

const SignIn = () => {
  const go = useGo()
  const auth = useAuth()
  const [open, setOpen] = useState(false)

  const { register, handleSubmit } = useForm<Inputs>({
    mode: "all",
  })
  const onSubmit: SubmitHandler<Inputs> = async info => {
    try {
      const idToken = await login(info.account, info.password)
      const requestHeaders = { headers: headers(idToken) }
      const query = { query: print(CUSTOM_TOKEN) }
      const customToken = await axios.post(endpoint, query, requestHeaders)

      setStorageValue("token", customToken.data.data.customToken.customToken)
      if (customToken) {
        auth.signIn(customToken.data.data.customToken.customToken)
        go.toHome()
      }
    } catch {
      setOpen(true)
    }
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>登入你的帳戶</div>
      <div className={styled.subtitle}>歡迎回來！請輸入你的資料</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input type="text" placeholder="帳號" {...register("account")} />
        <Form.Input type="password" placeholder="密碼" {...register("password")} />
        <Button variant="transparent" type="submit">
          登入
        </Button>
        <Button variant="transparent" type="button" onClick={go.toHome}>
          訪客登入
        </Button>
        <Modal title="登入失敗" open={open} confirmText="確定" onClose={() => setOpen(false)}>
          帳號密碼錯誤，請重新輸入
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
