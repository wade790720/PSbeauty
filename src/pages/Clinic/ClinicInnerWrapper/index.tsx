import { Outlet } from "react-router-dom"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import ClinicSwitch from "../ClinicSwitch"
import BottomNavigation from "components/BottomNavigation"

const ClinicInnerWrapper = () => {
  return (
    <>
      <Header leftArrow title="玉欣醫美診所" />
      <Backdrop style={{ paddingBottom: "49px" }}>
        <ClinicSwitch />
        <Outlet />
        <BottomNavigation />
      </Backdrop>
    </>
  )
}
export default ClinicInnerWrapper
