import { useState } from "react"
import styled from "./Member.module.scss"
import Button from "components/Button"
import Profile from "components/Profile"
import BottomNavigation from "components/BottomNavigation"
import { useGo } from "components/Router"
import Modal from "components/Modal"
import { useAuth } from "hooks/useAuth"

const Member = () => {
  const [open, setOpen] = useState(false)
  const go = useGo()
  const auth = useAuth()

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
          title="寄送認證郵件"
          open={open}
          confirmText="發送"
          cancelText="取消"
          onClose={() => setOpen(false)}>
          錯誤提示文字
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
      <BottomNavigation />
    </>
  )
}
export default Member
