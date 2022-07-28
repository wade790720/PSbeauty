/* eslint-disable prettier/prettier */
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
  toClinicActivity: ({ clinicId, activityId }: { clinicId: string; activityId: string }) => void
  /** 案例 */
  toClinicCaseList: () => void
  /** 案例內頁 */
  toClinicCase: ({ caseId, clinicId }: { caseId: string, clinicId: string }) => void
  /** 廣告內頁 */
  toAdvertisement: ({ id }: { id: string }) => void
  /** 諮詢歷史紀錄 */
  toConsultationRecord: () => void
  /** 收藏案例 */
  toCollectClinicalCase: () => void
  /** 忘記密碼 */
  toForgotPassword: () => void
  /** 常見問答 */
  toQuestions: () => void
  /** 聊天室 */
  toChatroom: ({ id }: { id: string }) => void
  /** 醫生修改密碼 */
  toDoctorUpdatePassword: () => void
  /** 搜尋結果列表 */
  toSearchList: (text: string, options?: { replace: boolean }) => void
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
    toClinicActivity: ({ clinicId, activityId }) => navigate(`/clinic/${clinicId}/activity/${activityId}`),
    toClinicCaseList: () => navigate("/cases"),
    toClinicCase: ({ caseId, clinicId }) => navigate(`/clinic/${clinicId}/case/${caseId}`),
    toAdvertisement: ({ id }) => navigate(`/advertisement/${id}`),
    toConsultationRecord: () => navigate("/member/consultation-record"),
    toCollectClinicalCase: () => navigate("/member/collect-clinical-case"),
    toForgotPassword: () => navigate("/forgot-password"),
    toQuestions: () => navigate("/member/questions"),
    toChatroom: ({ id }) => navigate(`/chatroom/${id}`),
    toDoctorUpdatePassword: () => navigate("/doctor/update-password"),
    toSearchList: (text, options) => navigate(`/search/${text}`, options),
    toDoctorInbox: () => navigate("/doctor/inbox"),
    toMemberInbox: () => navigate("/member/inbox"),
  }
}

export default useGo
