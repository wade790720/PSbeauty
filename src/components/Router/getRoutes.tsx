import { lazy, Suspense as ReactSuspense } from "react"
import { RouteObject } from "react-router-dom"
import QueryStatus from "components/QueryStatus"

const NotFound = lazy(() => import("pages/NotFound"))
const SignIn = lazy(() => import("pages/SignIn"))
const Home = lazy(() => import("pages/Home"))
const Advertisement = lazy(() => import("pages/Advertisement"))
const CaseInner = lazy(() => import("pages/CaseInner"))
const Register = lazy(() => import("pages/Register"))
const ForgotPassword = lazy(() => import("pages/ForgotPassword"))
const Survey = lazy(() => import("pages/Survey"))
const Search = lazy(() => import("pages/Search"))
const SearchList = lazy(() => import("pages/SearchList"))
const Chatroom = lazy(() => import("pages/Chatroom"))
const ClinicalCaseList = lazy(() => import("pages/Clinic/ClinicalCaseList"))
const ClinicalCase = lazy(() => import("pages/Clinic/ClinicalCase"))
const Clinic = lazy(() => import("pages/Clinic"))
const ClinicInner = lazy(() => import("pages/Clinic/ClinicInner"))
const ClinicIntroduction = lazy(() => import("pages/Clinic/ClinicIntroduction"))
const ClinicMedicalTeam = lazy(() => import("pages/Clinic/ClinicMedicalTeam"))
const ClinicActivities = lazy(() => import("pages/Clinic/ClinicActivities"))
const ClinicActivity = lazy(() => import("pages/Clinic/ClinicActivity"))
const Member = lazy(() => import("pages/Member"))
const MemberConsultationRecord = lazy(() => import("pages/Member/MemberConsultationRecord"))
const MemberCollectClinicalCase = lazy(() => import("pages/Member/MemberCollectClinicalCase"))
const MemberUpdatePassword = lazy(() => import("pages/Member/MemberUpdatePassword"))
const MemberInbox = lazy(() => import("pages/Member/MemberInbox"))
const MemberQuestions = lazy(() => import("pages/Member/MemberQuestions"))
const Doctor = lazy(() => import("pages/Doctor"))
const DoctorInbox = lazy(() => import("pages/Doctor/DoctorInbox"))
const DoctorInformation = lazy(() => import("pages/Doctor/DoctorInformation"))

const Suspense = (props: ReactProps.Component) => {
  return <ReactSuspense fallback={<QueryStatus.Loading />}>{props.children}</ReactSuspense>
}

const getRoutes = (): RouteObject[] => {
  return [
    /* 首頁 */
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    /* 登入頁 */
    {
      path: "sign-in",
      element: (
        <Suspense>
          <SignIn />
        </Suspense>
      ),
    },
    /* 註冊 */
    {
      path: "register",
      element: (
        <Suspense>
          <Register />
        </Suspense>
      ),
    },
    /* 忘記密碼 */
    {
      path: "forgot-password",
      element: (
        <Suspense>
          <ForgotPassword />
        </Suspense>
      ),
    },
    /* 問卷 */
    {
      path: "survey",
      element: (
        <Suspense>
          <Survey />
        </Suspense>
      ),
    },
    /* 搜尋 */
    {
      path: "search",
      element: (
        <Suspense>
          <Search />
        </Suspense>
      ),
    },
    /* 搜尋列表 */
    {
      path: "search/:id",
      element: (
        <Suspense>
          <SearchList />
        </Suspense>
      ),
    },
    /* 聊天室 */
    {
      path: "chatroom",
      element: (
        <Suspense>
          <Chatroom />
        </Suspense>
      ),
    },
    /* 廣告內頁 */
    {
      path: "/advertisement",
      element: (
        <Suspense>
          <Advertisement />
        </Suspense>
      ),
    },
    /* 案例內頁 */
    {
      path: "/case-inner",
      element: (
        <Suspense>
          <CaseInner />
        </Suspense>
      ),
    },
    {
      path: "clinical-case-list",
      children: [
        /* 臨床案例頁 */
        {
          index: true,
          element: (
            <Suspense>
              <ClinicalCaseList />
            </Suspense>
          ),
        },
        /* 臨床案例內頁 */
        {
          path: ":id",
          element: (
            <Suspense>
              <ClinicalCase />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "member",
      children: [
        /* 會員頁 */
        {
          index: true,
          element: (
            <Suspense>
              <Member />
            </Suspense>
          ),
        },
        /* 諮詢歷史紀錄 */
        {
          path: "consultation-record",
          element: (
            <Suspense>
              <MemberConsultationRecord />
            </Suspense>
          ),
        },
        /* 收藏案例紀錄頁 */
        {
          path: "collect-clinical-case",
          element: (
            <Suspense>
              <MemberCollectClinicalCase />
            </Suspense>
          ),
        },
        /* 修改密碼 */
        {
          path: "update-password",
          element: (
            <Suspense>
              <MemberUpdatePassword />
            </Suspense>
          ),
        },
        /* 收件夾 */
        {
          path: "inbox",
          element: (
            <Suspense>
              <MemberInbox />
            </Suspense>
          ),
        },
        /* 常見問答 */
        {
          path: "questions",
          element: (
            <Suspense>
              <MemberQuestions />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "doctor",
      children: [
        /* 診所醫生 */
        {
          index: true,
          element: (
            <Suspense>
              <Doctor />
            </Suspense>
          ),
        },
        /* 即時訊息收件夾 */
        {
          path: "inbox",
          element: (
            <Suspense>
              <DoctorInbox />
            </Suspense>
          ),
        },
        /* 個人資訊頁 */
        {
          path: "information",
          element: (
            <Suspense>
              <DoctorInformation />
            </Suspense>
          ),
        },
        /* 修改密碼 */
        {
          path: "update-password",
          element: (
            <Suspense>
              <MemberUpdatePassword />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "clinic",
      children: [
        /* 診所頁 */
        {
          index: true,
          element: (
            <Suspense>
              <Clinic />
            </Suspense>
          ),
        },
        /* 診所內頁 */
        {
          path: ":id",
          children: [
            {
              index: true,
              element: (
                <Suspense>
                  <ClinicInner />
                </Suspense>
              ),
            },
            /* 診所介紹頁 */
            {
              path: "introduction",
              element: (
                <Suspense>
                  <ClinicIntroduction />
                </Suspense>
              ),
            },
            /* 醫師團隊 */
            {
              path: "medical-team",
              element: (
                <Suspense>
                  <ClinicMedicalTeam />
                </Suspense>
              ),
            },
            {
              /* 診所活動 */
              path: "activities",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense>
                      <ClinicActivities />
                    </Suspense>
                  ),
                },
                /* 診所活動內頁 */
                {
                  path: ":id",
                  element: (
                    <Suspense>
                      <ClinicActivity />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
    /* 404 not found */
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
    },
  ]
}

export default getRoutes
