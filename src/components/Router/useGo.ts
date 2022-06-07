import { useNavigate } from "react-router-dom"

type toTarget = {
  /** 首頁 */
  toHome: () => void
  /** 診所頁 */
  toClinic: () => void
  /** 案例 */
  toClinicCaseList: () => void
  /** 廣告內頁 */
  toAdvertisement: () => void
}

const useGo = (): toTarget => {
  const navigate = useNavigate()
  return {
    toHome: () => navigate("/"),
    toClinic: () => navigate("/clinic"),
    toClinicCaseList: () => navigate("/clinical-case-list"),
    toAdvertisement: () => navigate("/advertisement"),
  }
}

export default useGo
