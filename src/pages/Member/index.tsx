import styled from "./Member.module.scss"
import Button from "components/Button"
import Profile from "components/Profile"
import BottomNavigation from "components/BottomNavigation"

const Member = () => {
  return (
    <>
      <Profile />
      <div className={styled.wrapper}>
        <Button variant="secondary">諮詢歷史紀錄</Button>
        <Button variant="secondary">收藏案例</Button>
        <Button variant="secondary">修改密碼</Button>
        <Button variant="secondary">常見問答</Button>
        <div />
        <Button variant="text">登出</Button>
      </div>
      <BottomNavigation />
    </>
  )
}
export default Member
