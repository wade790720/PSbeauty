import { useCallback } from "react"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import Form, { Append, InputGroup } from "components/Form"
import Button from "components/Button"
import Icon from "components/Icon"
import { SubmitHandler, useForm } from "react-hook-form"
import styled from "./MemberUpdatePassword.module.scss"

type Inputs = {
  password: string
  newPassword: string
  repeatPassword: string
}

const MemberUpdatePassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<Inputs> = useCallback(data => console.log("onSubmit", data), [])
  return (
    <>
      <Header leftArrow />
      <Backdrop className={styled.wrapper}>
        <div className={styled.title}>修改密碼</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* password */}
          <Form.Group layout="vertical">
            <Form.Label className={styled["input-title"]}>現在的密碼</Form.Label>
            <InputGroup className={styled["input-box-group"]}>
              <Form.Input
                className={styled["input-box"]}
                autoComplete="off"
                {...register("password", {
                  required: true,
                })}
                {...(errors?.password ? { variant: "invalid" } : {})}
              />
            </InputGroup>
            <div className={styled.msg}>
              {errors?.password && <Form.ErrorMessage>必填欄位</Form.ErrorMessage>}
            </div>
          </Form.Group>
          {/* newPassword */}
          <div className={styled.split} />
          <Form.Group layout="vertical">
            <Form.Label className={styled["input-title"]}>新密碼</Form.Label>
            <InputGroup className={styled["input-box-group"]}>
              <Form.Input
                className={styled["input-box"]}
                autoComplete="off"
                {...register("newPassword", {
                  required: true,
                })}
                {...(errors?.newPassword ? { variant: "invalid" } : {})}
              />
              <Append>
                <Icon name="Cross" />
                <Icon name="EyeFill" />
              </Append>
            </InputGroup>
            <div className={styled.msg}>
              {errors?.newPassword && <Form.ErrorMessage>必填欄位</Form.ErrorMessage>}
            </div>
          </Form.Group>
          {/* repeatPassword */}
          <Form.Group layout="vertical">
            <Form.Label className={styled["input-title"]}>密碼確認</Form.Label>
            <InputGroup className={styled["input-box-group"]}>
              <Form.Input
                className={styled["input-box"]}
                autoComplete="off"
                {...register("repeatPassword", {
                  required: true,
                  validate: (repeatPassword: string) =>
                    repeatPassword && getValues("newPassword") === repeatPassword,
                })}
                {...(errors?.repeatPassword ? { variant: "invalid" } : {})}
              />
              <Append>
                <Icon name="Cross" />
                <Icon name="EyeFill" />
              </Append>
            </InputGroup>
            <div className={styled.msg}>
              {errors?.repeatPassword && <Form.ErrorMessage>密碼不符</Form.ErrorMessage>}
            </div>
          </Form.Group>
          <Button className={styled.submit}>完成</Button>
        </Form>
      </Backdrop>
    </>
  )
}
export default MemberUpdatePassword
