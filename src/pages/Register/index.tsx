import { useEffect, useState } from "react"
import styled from "./Register.module.scss"
import Form from "components/Form"
import Button from "components/Button"
import Modal from "components/Modal"
import { useGo } from "components/Router"
import apolloClient from "graphql/apolloClient"
import * as FirebaseClient from "firebaseClient"
import { SubmitHandler, useForm } from "react-hook-form"
import { AddUserDocument } from "graphql/queries/addUser.graphql.generated"
import { setStorageValue, removeStorageValue } from "hooks/useLocalStorage"

type Inputs = {
  account: string
  password: string
  name: string
  phone: string
}

const Register = () => {
  const [openError, setOpenError] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const go = useGo()
  const [countDown, setCountDown] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
      if (FirebaseClient.cachedUserCred.timeout) {
        const ms = FirebaseClient.cachedUserCred.timeout - new Date().getTime()
        setCountDown(ms > 0 ? Math.ceil(ms / 1000) : 0)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [FirebaseClient.cachedUserCred.timeout])

  const { register, handleSubmit } = useForm<Inputs>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<Inputs> = info => {
    FirebaseClient.register(info.account, info.password)
      .then(async idToken => {
        setStorageValue("customToken", idToken)
        try {
          const { data } = await apolloClient.mutate({
            mutation: AddUserDocument,
            variables: {
              phone: info.phone,
              name: info.name,
              clientToken: ["firebase_client_device_token"],
            },
          })
          if (data?.addUser?.id) {
            setOpenConfirm(true)
          }
        } finally {
          removeStorageValue("customToken")
        }
      })
      .catch(() => {
        setOpenError(true)
      })
  }

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>註冊你的帳戶</div>
      <div className={styled.subtitle}>歡迎加入！請輸入你的資料</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input type="text" variant="gray" placeholder="帳號" {...register("account")} />
        <Form.Input type="password" variant="gray" placeholder="密碼" {...register("password")} />
        <Form.Input type="text" variant="gray" placeholder="名稱" {...register("name")} />
        <Form.Input type="text" variant="gray" placeholder="電話" {...register("phone")} />
        <Button type="submit" variant="primary">
          註冊
        </Button>
        <Modal
          title="帳號已存在"
          open={openError}
          confirmText="確定"
          onClose={() => setOpenError(false)}>
          錯誤提示文字
        </Modal>
        <Modal
          title="認證郵件已寄送"
          open={openConfirm}
          confirmText={"重新發送" + (countDown ? `(${countDown})` : "")}
          confirmButtonProps={{ disabled: !!countDown }}
          cancelText="關閉"
          onConfirm={() => FirebaseClient.resendEmailVerification()}
          onCancel={() => {
            setOpenConfirm(false)
            go.toSignIn()
          }}>
          請至信箱選取郵件，並點選確認按鈕
        </Modal>
      </Form>
      <div className={styled.actions}>
        <div />
        <div onClick={go.toResendVerification}>重發驗證信</div>
        <div>|</div>
        <div onClick={go.toSignIn}>已有帳號</div>
        <div />
      </div>
    </div>
  )
}
export default Register
