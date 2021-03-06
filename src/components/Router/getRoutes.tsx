import { lazy, Suspense as ReactSuspense } from "react"
import { RouteObject, Navigate } from "react-router-dom"
import QueryStatus from "components/QueryStatus"
import { AuthContextProps } from "hooks/useAuth/AuthContext"

const NotFound = lazy(() => import("pages/NotFound"))
const SignIn = lazy(() => import("pages/SignIn"))
const Home = lazy(() => import("pages/Home"))
const Advertisement = lazy(() => import("pages/Advertisement"))
const CaseInner = lazy(() => import("pages/CaseInner"))
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
    /* ?????? */
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    /* ????????? */
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
    /* ?????? */
    {
      path: "register",
      element: (
        <Suspense>
          <Register />
        </Suspense>
      ),
    },
    /* ???????????? */
    {
      path: "forgot-password",
      element: (
        <Suspense>
          <ForgotPassword />
        </Suspense>
      ),
    },
    /* ?????? */
    {
      path: "survey",
      element: (
        <Suspense>
          <Survey />
        </Suspense>
      ),
    },
    /* ?????????????????? */
    {
      path: "search",
      element: (
        <Suspense>
          <SearchWrapper />
        </Suspense>
      ),
      children: [
        /* ?????? */
        {
          index: true,
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        /* ???????????? */
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
    /* ????????? */
    {
      path: "chatroom/:id",
      element: (
        <Suspense>
          <Chatroom />
        </Suspense>
      ),
    },
    /* ???????????? */
    {
      path: "/advertisement/:id",
      element: (
        <Suspense>
          <Advertisement />
        </Suspense>
      ),
    },
    /* ???????????? */
    {
      path: "/case-inner",
      element: (
        <Suspense>
          <CaseInner />
        </Suspense>
      ),
    },
    /* ??????????????? */
    {
      path: "cases",
      element: (
        <Suspense>
          <ClinicalCaseList />
        </Suspense>
      ),
    },
    /* ?????????????????? */
    {
      path: "clinic/:clinicId/case/:caseId",
      element: (
        <Suspense>
          <ClinicalCase />
        </Suspense>
      ),
    },
    /* ?????????????????? */
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
        /* ????????? */
        {
          index: true,
          element: user.id ? (
            <Suspense>{user.clinic ? <Navigate to="/doctor" /> : <Member />}</Suspense>
          ) : (
            <Navigate to="/sign-in" />
          ),
        },
        /* ?????????????????? */
        {
          path: "consultation-record",
          element: (
            <Suspense>
              <MemberConsultationRecord />
            </Suspense>
          ),
        },
        /* ????????????????????? */
        {
          path: "collect-clinical-case",
          element: (
            <Suspense>
              <MemberCollectClinicalCase />
            </Suspense>
          ),
        },
        /* ????????? */
        {
          path: "inbox",
          element: (
            <Suspense>
              <MemberInbox />
            </Suspense>
          ),
        },
        /* ???????????? */
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
        /* ???????????? */
        {
          index: true,
          element: user.id ? (
            <Suspense>{user.clinic ? <Doctor /> : <Navigate to="/member" />}</Suspense>
          ) : (
            <Navigate to="/sign-in" />
          ),
        },
        /* ????????????????????? */
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
        /* ????????? */
        {
          index: true,
          element: (
            <Suspense>
              <Clinic />
            </Suspense>
          ),
        },
        /* ?????????????????? */
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
            /* ???????????? */
            {
              path: "medical-team",
              element: (
                <Suspense>
                  <ClinicMedicalTeam />
                </Suspense>
              ),
            },
            {
              /* ???????????? */
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
