import { useState } from "react"
import Button from "components/Button"
import Profile from "components/Profile"
import Toolbars from "components/Toolbars"
import { useGo } from "components/Router"
import Modal from "components/Modal"
import { useAuth } from "hooks/useAuth"
import { sentResetPassword } from "firebaseClient"
import styled from "./Member.module.scss"

const DEFAULT_MODAL_MSG = {
  title: "1寄送認證郵件",
  content: "將密碼認證信寄至註冊信箱",
  confirm: "發送",
  cancel: "取消",
}

const Member = () => {
  const [open, setOpen] = useState(false)
  const go = useGo()
  const auth = useAuth()
  const [modalMsg, setModalMsg] = useState(DEFAULT_MODAL_MSG)

  return (
    <>
      <Profile />
      <div className={styled.wrapper}>
        <Button variant="secondary" onClick={go.toConsultationRecord}>
          諮詢歷史紀錄
        </Button>
        <Button variant="secondary" onClick={go.toCollectClinicalCase}>
          收藏案例
        </Button>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          修改密碼
        </Button>
        <Button variant="secondary" onClick={go.toQuestions}>
          常見問答
        </Button>
        <Modal
          title={modalMsg.title}
          open={open}
          confirmText={modalMsg.confirm}
          cancelText={modalMsg.cancel}
          onConfirm={async () => {
            try {
              if (auth?.user?.email) {
                await sentResetPassword(auth?.user?.email)
                setModalMsg({
                  ...modalMsg,
                  title: "發送成功",
                  content: "請至註冊信箱查收新密碼",
                  confirm: "",
                  cancel: "關閉",
                })
              }
            } catch {
              setModalMsg({
                ...modalMsg,
                title: "發送失敗",
                content: "請重新發送",
                confirm: "",
                cancel: "關閉",
              })
            }

            setOpen(true)
          }}
          onCancel={() => {
            setModalMsg(DEFAULT_MODAL_MSG)
            setOpen(false)
          }}>
          {modalMsg.content}
        </Modal>
        <div />
        <Button
          variant="text"
          onClick={() => {
            auth.signOut()
            go.toHome()
          }}>
          登出
        </Button>
      </div>
      <Toolbars />
    </>
  )
}
export default Member
