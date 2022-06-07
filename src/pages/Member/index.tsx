import styled from "./Member.module.scss"
import Button from "components/Button"
import Profile from "components/Profile"
import BottomNavigation from "components/BottomNavigation"
import { useGo } from "components/Router"

const Member = () => {
  const go = useGo()
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
        <Button variant="secondary" onClick={go.toUpdatePassword}>
          修改密碼
        </Button>
        <Button variant="secondary" onClick={go.toQuestions}>
          常見問答
        </Button>
        <div />
        <Button variant="text" onClick={go.toHome}>
          登出
        </Button>
      </div>
      <BottomNavigation />
    </>
  )
}
export default Member
