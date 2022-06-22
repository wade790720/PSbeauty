import { useState } from "react"
import axios from "axios"
import styled from "./Register.module.scss"
import Form from "components/Form"
import Button from "components/Button"
import Modal from "components/Modal"
import { useGo } from "components/Router"
import * as FirebaseClient from "firebaseClient"
import { SubmitHandler, useForm } from "react-hook-form"
import { endpoint, headers } from "utils/apiConfig"
import { print } from "graphql"
import gql from "graphql-tag"

type Inputs = {
  account: string
  password: string
  name: string
  phone: string
}

const ADD_USER = gql`
  mutation addUser($phone: String, $clientToken: [String], $name: String!) {
    addUser(input: { phone: $phone, clientToken: $clientToken, name: $name }) {
      id
    }
  }
`

const Register = () => {
  const [open, setOpen] = useState(false)
  const go = useGo()

  const { register, handleSubmit } = useForm<Inputs>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<Inputs> = info => {
    FirebaseClient.register(info.account, info.password)
      .then(async idToken => {
        const { data } = await axios.post(
          endpoint,
          {
            query: print(ADD_USER),
            variables: {
              phone: info.phone,
              name: info.name,
              clientToken: ["firebase_client_device_token"],
            },
          },
          { headers: headers(idToken) },
        )

        if (data?.data?.addUser?.id) console.log("register success")
      })
      .catch(() => {
        setOpen(true)
      })
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>註冊你的帳戶</div>
      <div className={styled.subtitle}>歡迎加入！請輸入你的資料</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input type="text" placeholder="帳號" {...register("account")} />
        <Form.Input type="password" placeholder="密碼" {...register("password")} />
        <Form.Input type="text" placeholder="名稱" {...register("name")} />
        <Form.Input type="text" placeholder="電話" {...register("phone")} />
        <Button type="submit" variant="transparent">
          註冊
        </Button>
        <Modal title="帳號已存在" open={open} confirmText="確定" onClose={() => setOpen(false)}>
          錯誤提示文字
        </Modal>
      </Form>
      <div className={styled.actions}>
        <div />
        <div onClick={go.toForgotPassword}>忘記密碼</div>
        <div>|</div>
        <div onClick={go.toSignIn}>已有帳號</div>
        <div />
      </div>
    </div>
  )
}
export default Register
