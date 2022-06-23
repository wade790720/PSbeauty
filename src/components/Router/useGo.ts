import { useNavigate } from "react-router-dom"

type toTarget = {
  /** 首頁 */
  toHome: () => void
  /** 登入 */
  toSignIn: () => void
  /** 註冊 */
  toRegister: () => void
  /** 診所頁 */
  toClinic: () => void
  /** 診所內頁 */
  toClinicInner: ({ id, tab }: { id: string; tab: string }) => void
  /** 診所活動內頁 */
  toClinicActivity: ({ id, activityId }: { id: string; activityId: string }) => void
  /** 案例 */
  toClinicCaseList: () => void
  /** 案例內頁 */
  toClinicCase: ({ id }: { id: string }) => void
  /** 廣告內頁 */
  toAdvertisement: ({ id }: { id: string }) => void
  /** 諮詢歷史紀錄 */
  toConsultationRecord: () => void
  /** 收藏案例 */
  toCollectClinicalCase: () => void
  /** 修改密碼 */
  toUpdatePassword: () => void
  /** 忘記密碼 */
  toForgotPassword: () => void
  /** 常見問答 */
  toQuestions: () => void
  /** 聊天室 */
  toChatroom: () => void
  /** 醫生修改密碼 */
  toDoctorUpdatePassword: () => void
  /** 搜尋結果列表 */
  toSearchList: (text: string) => void
  /** 醫生信箱 */
  toDoctorInbox: () => void
  /** 個人信箱 */
  toMemberInbox: () => void
}

const useGo = (): toTarget => {
  const navigate = useNavigate()
  return {
    toHome: () => navigate("/"),
    toSignIn: () => navigate("/sign-in"),
    toRegister: () => navigate("/register"),
    toClinic: () => navigate("/clinic"),
    toClinicInner: ({ id, tab }) => navigate(`/clinic/${id}/inner/${tab}`),
    toClinicActivity: ({ id, activityId }) =>
      navigate(`/clinic/${id}/inner/activities/${activityId}`),
    toClinicCaseList: () => navigate("/clinical-case-list"),
    toClinicCase: ({ id }) => navigate(`/clinical-case-list/${id}`),
    toAdvertisement: ({ id }) => navigate(`/advertisement/${id}`),
    toConsultationRecord: () => navigate("/member/consultation-record"),
    toCollectClinicalCase: () => navigate("/member/collect-clinical-case"),
    toUpdatePassword: () => navigate("/member/update-password"),
    toForgotPassword: () => navigate("/forgot-password"),
    toQuestions: () => navigate("/member/questions"),
    toChatroom: () => navigate("/chatroom"),
    toDoctorUpdatePassword: () => navigate("/doctor/update-password"),
    toSearchList: text => navigate(`/search/${text}`),
    toDoctorInbox: () => navigate("/doctor/inbox"),
    toMemberInbox: () => navigate("/member/inbox"),
  }
}

export default useGo
