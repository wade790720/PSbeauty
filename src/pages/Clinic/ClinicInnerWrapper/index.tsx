import { Outlet, useMatch } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import ClinicSwitch from "../ClinicSwitch"
import BottomNavigation from "components/BottomNavigation"

const ClinicInnerWrapper = () => {
  const auth = useAuth()
  const match = useMatch("/clinic/:id/inner/activities/:activityId")

  return match?.params.activityId ? (
    <Outlet />
  ) : (
    <>
      <Header leftArrow title="玉欣醫美診所" />
      <Backdrop style={{ paddingBottom: "49px" }}>
        <ClinicSwitch />
        <Outlet />
        {auth.user.id ? <BottomNavigation.Chat /> : <BottomNavigation />}
      </Backdrop>
    </>
  )
}
export default ClinicInnerWrapper
