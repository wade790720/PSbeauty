import { useState, useRef } from "react"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import Form, { Append, InputGroup } from "components/Form"
import Button from "components/Button"
import Icon from "components/Icon"
import Modal from "components/Modal"
import { SubmitHandler, useForm } from "react-hook-form"
import { sentResetPassword } from "firebaseClient"
import styled from "./ForgotPassword.module.scss"

type Inputs = {
  email: string
}

const ForgotPassword = () => {
  const [open, setOpen] = useState(false)
  const submitSuccessRef = useRef(false)

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
  })

  const isValidEmail = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    )

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await sentResetPassword(data.email)
      submitSuccessRef.current = true
    } catch {
      submitSuccessRef.current = false
    }
    setOpen(true)
  }
  return (
    <>
      <Header leftArrow />
      <Backdrop className={styled.wrapper}>
        <div className={styled.title}>忘記密碼</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group layout="vertical">
            <Form.Label>Email</Form.Label>
            <InputGroup className={styled["input-box-group"]}>
              <Form.Input
                className={styled["input-box"]}
                autoComplete="off"
                {...register("email", {
                  required: true,
                  validate: (email: string) => isValidEmail(email),
                })}
                {...(errors?.email?.type &&
                  (["required", "validate"].some(el => el === errors?.email?.type)
                    ? { variant: "invalid" }
                    : { variant: "valid" }))}
                placeholder="example@gmail.com"
              />
              <Append>
                {errors?.email?.type &&
                  getValues("email") &&
                  (errors?.email?.type === "required" || errors?.email?.type === "validate" ? (
                    <div onClick={() => reset()}>
                      <Icon name="Cross" />
                    </div>
                  ) : (
                    <Icon name="Check" />
                  ))}
              </Append>
            </InputGroup>
            <div className={styled.msg}>
              {errors?.email?.type &&
                (errors?.email?.type === "required" || errors?.email?.type === "validate" ? (
                  <Form.ErrorMessage>格式不符合</Form.ErrorMessage>
                ) : (
                  <Form.ValidMessage>格式符合</Form.ValidMessage>
                ))}
            </div>
          </Form.Group>
          <Button type="submit">發送</Button>
          <Modal
            title={submitSuccessRef.current ? "發送成功" : "信箱錯誤"}
            open={open}
            confirmText="關閉"
            onClose={() => setOpen(false)}>
            {submitSuccessRef.current ? "請至註冊信箱查收新密碼" : "錯誤提示文字"}
          </Modal>
        </Form>
      </Backdrop>
    </>
  )
}
export default ForgotPassword
