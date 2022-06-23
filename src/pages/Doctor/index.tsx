import { useState } from "react"
import Button from "components/Button"
import Profile from "components/Profile"
import BottomNavigation from "components/BottomNavigation"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"
import SubjectFilter from "components/SubjectFilter"
import styled from "./Doctor.module.scss"

const Doctor = () => {
  const go = useGo()
  const auth = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Profile />
      <div className={styled.wrapper}>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          {/* <Button variant="secondary" onClick={go.toDoctorInformation}> */}
          專長項目
        </Button>
        <Button variant="secondary" onClick={go.toUpdatePassword}>
          修改密碼
        </Button>
        <div />
        <Button
          variant="text"
          onClick={() => {
            auth.signOut()
            go.toHome()
          }}>
          登出
        </Button>
        <SubjectFilter
          open={open}
          onClose={() => setOpen(false)}
          getValue={value => console.log(value)}
        />
      </div>
      <BottomNavigation.Chat />
    </>
  )
}
export default Doctor
