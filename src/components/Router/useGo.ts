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
  /** 諮詢歷史紀錄 */
  toConsultationRecord: () => void
  /** 收藏案例 */
  toCollectClinicalCase: () => void
  /** 修改密碼 */
  toUpdatePassword: () => void
  /** 常見問答 */
  toQuestions: () => void
  /** 聊天室 */
  toChatroom: () => void
  /** 個人資訊頁 */
  toDoctorInformation: () => void
  /** 醫生修改密碼 */
  toDoctorUpdatePassword: () => void
  /** 搜尋結果列表 */
  toSearchList: (text: string) => void
}

const useGo = (): toTarget => {
  const navigate = useNavigate()
  return {
    toHome: () => navigate("/"),
    toClinic: () => navigate("/clinic"),
    toClinicCaseList: () => navigate("/clinical-case-list"),
    toAdvertisement: () => navigate("/advertisement"),
    toConsultationRecord: () => navigate("/member/consultation-record"),
    toCollectClinicalCase: () => navigate("/member/collect-clinical-case"),
    toUpdatePassword: () => navigate("/member/update-password"),
    toQuestions: () => navigate("/member/questions"),
    toChatroom: () => navigate("/chatroom"),
    toDoctorInformation: () => navigate("/doctor/information"),
    toDoctorUpdatePassword: () => navigate("/doctor/update-password"),
    toSearchList: text => navigate(`/search/${text}`),
  }
}

export default useGo
