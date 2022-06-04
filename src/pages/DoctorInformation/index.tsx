import styled from "./DoctorInformation.module.scss"
import Button from "components/Button"
import Profile from "components/Profile"
import BottomNavigation from "components/BottomNavigation"

const DoctorInformation = () => {
  return (
    <>
      <Profile />
      <div className={styled.wrapper}>
        <Button variant="secondary">專長項目</Button>
        <Button variant="secondary">修改密碼</Button>
        <div />
        <Button variant="text">登出</Button>
      </div>
      <BottomNavigation.Chat />
    </>
  )
}
export default DoctorInformation
