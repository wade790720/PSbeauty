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
      <div className={styled.title}>??????????????????</div>
      <div className={styled.subtitle}>????????????????????????????????????</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input type="text" placeholder="??????" {...register("account")} />
        <Form.Input type="password" placeholder="??????" {...register("password")} />
        <Form.Input type="text" placeholder="??????" {...register("name")} />
        <Form.Input type="text" placeholder="??????" {...register("phone")} />
        <Button type="submit" variant="transparent">
          ??????
        </Button>
        <Modal
          title="???????????????"
          open={openError}
          confirmText="??????"
          onClose={() => setOpenError(false)}>
          ??????????????????
        </Modal>
        <Modal
          title="?????????????????????"
          open={openConfirm}
          confirmText={"????????????" + (countDown ? `(${countDown})` : "")}
          confirmButtonProps={{ disabled: !!countDown }}
          cancelText="??????"
          onConfirm={() => FirebaseClient.resendEmailVerification()}
          onCancel={() => {
            setOpenConfirm(false)
            go.toSignIn()
          }}>
          ????????????????????????????????????????????????
        </Modal>
      </Form>
      <div className={styled.actions}>
        <div />
        <div onClick={go.toForgotPassword}>????????????</div>
        <div>|</div>
        <div onClick={go.toSignIn}>????????????</div>
        <div />
      </div>
    </div>
  )
}
export default Register
