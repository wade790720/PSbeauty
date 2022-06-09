import { Outlet } from "react-router-dom"

const ClinicInnerWrapper = () => {
  return (
    <>
      <div>診所內頁外框</div>
      <Outlet />
    </>
  )
}
export default ClinicInnerWrapper
