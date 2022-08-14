import { lazy, Suspense as ReactSuspense } from "react"
import { RouteObject, Navigate } from "react-router-dom"
import QueryStatus from "components/QueryStatus"
import { AuthContextProps } from "hooks/useAuth/AuthContext"

const NotFound = lazy(() => import("pages/NotFound"))
const SignIn = lazy(() => import("pages/SignIn"))
const Home = lazy(() => import("pages/Home"))
const Advertisement = lazy(() => import("pages/Advertisement"))
const Register = lazy(() => import("pages/Register"))
const ForgotPassword = lazy(() => import("pages/ForgotPassword"))
const Survey = lazy(() => import("pages/Survey"))
const SearchWrapper = lazy(() => import("pages/SearchWrapper"))
const Search = lazy(() => import("pages/Search"))
const SearchList = lazy(() => import("pages/SearchList"))
const Chatroom = lazy(() => import("pages/Chatroom"))
const ClinicalCaseList = lazy(() => import("pages/Clinic/ClinicalCaseList"))
const ClinicalCase = lazy(() => import("pages/Clinic/ClinicalCase"))
const Clinic = lazy(() => import("pages/Clinic"))
const ClinicInner = lazy(() => import("pages/Clinic/ClinicInner"))
const ClinicInnerWrapper = lazy(() => import("pages/Clinic/ClinicInnerWrapper"))
const ClinicIntroduction = lazy(() => import("pages/Clinic/ClinicIntroduction"))
const ClinicMedicalTeam = lazy(() => import("pages/Clinic/ClinicMedicalTeam"))
const ClinicActivities = lazy(() => import("pages/Clinic/ClinicActivities"))
const ClinicActivity = lazy(() => import("pages/Clinic/ClinicActivity"))
const Member = lazy(() => import("pages/Member"))
const MemberConsultationRecord = lazy(() => import("pages/Member/MemberConsultationRecord"))
const MemberCollectClinicalCase = lazy(() => import("pages/Member/MemberCollectClinicalCase"))
const MemberInbox = lazy(() => import("pages/Member/MemberInbox"))
const MemberQuestions = lazy(() => import("pages/Member/MemberQuestions"))
const Doctor = lazy(() => import("pages/Doctor"))
const DoctorInbox = lazy(() => import("pages/Doctor/DoctorInbox"))

const Suspense = (props: ReactProps.Component) => {
  return <ReactSuspense fallback={<QueryStatus.Loading />}>{props.children}</ReactSuspense>
}

const getRoutes = ({ user }: AuthContextProps): RouteObject[] => {
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
      element: user.id ? (
        <Suspense>
          {user.clinic ? <Navigate to="/clinic/:id/inner/info" /> : <Navigate to="/" />}
        </Suspense>
      ) : (
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
    /* 搜尋內頁外框 */
    {
      path: "search",
      element: (
        <Suspense>
          <SearchWrapper />
        </Suspense>
      ),
      children: [
        /* 搜尋 */
        {
          index: true,
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        /* 搜尋列表 */
        {
          path: ":text",
          element: (
            <Suspense>
              <SearchList />
            </Suspense>
          ),
        },
      ],
    },
    /* 聊天室 */
    {
      path: "chatroom/:id",
      element: (
        <Suspense>
          <Chatroom />
        </Suspense>
      ),
    },
    /* 廣告內頁 */
    {
      path: "/advertisement/:id",
      element: (
        <Suspense>
          <Advertisement />
        </Suspense>
      ),
    },
    /* 臨床案例頁 */
    {
      path: "cases",
      element: (
        <Suspense>
          <ClinicalCaseList />
        </Suspense>
      ),
    },
    /* 臨床案例內頁 */
    {
      path: "clinic/:clinicId/case/:caseId",
      element: (
        <Suspense>
          <ClinicalCase />
        </Suspense>
      ),
    },
    /* 診所活動內頁 */
    {
      path: "clinic/:id/activity/:activityId",
      element: (
        <Suspense>
          <ClinicActivity />
        </Suspense>
      ),
    },
    {
      path: "member",
      children: [
        /* 會員頁 */
        {
          index: true,
          element: user.id ? (
            <Suspense>{user.clinic ? <Navigate to="/doctor" /> : <Member />}</Suspense>
          ) : (
            <Navigate to="/sign-in" />
          ),
        },
        /* 諮詢歷史紀錄 */
        {
          path: "consultation-record",
          element: user.id ? (
            <Suspense>
              <MemberConsultationRecord />
            </Suspense>
          ) : (
            <Navigate to="/sign-in" />
          ),
        },
        /* 收藏案例紀錄頁 */
        {
          path: "collect-clinical-case",
          element: user.id ? (
            <Suspense>
              <MemberCollectClinicalCase />
            </Suspense>
          ) : (
            <Navigate to="/sign-in" />
          ),
        },
        /* 收件夾 */
        {
          path: "inbox",
          element: user.id ? (
            <Suspense>
              <MemberInbox />
            </Suspense>
          ) : (
            <Navigate to="/sign-in" />
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
          element: user.id ? (
            <Suspense>{user.clinic ? <Doctor /> : <Navigate to="/member" />}</Suspense>
          ) : (
            <Navigate to="/sign-in" />
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
        /* 診所內頁外框 */
        {
          path: ":id/inner",
          element: (
            <Suspense>
              <ClinicInnerWrapper />
            </Suspense>
          ),
          children: [
            {
              index: true,
              path: "info",
              element: (
                <Suspense>
                  <ClinicInner />
                </Suspense>
              ),
            },
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
