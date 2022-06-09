import { Outlet } from "react-router-dom"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import ClinicSwitch from "components/ClinicSwitch"

const ClinicInnerWrapper = () => {
  return (
    <>
      <Header leftArrow title="玉欣醫美診所" />
      <Backdrop>
        <ClinicSwitch />
        <Outlet />
      </Backdrop>
    </>
  )
}
export default ClinicInnerWrapper
