import { useEffect } from "react"
import { Outlet, useOutletContext, useMatch, useParams, useNavigate } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import ClinicSwitch from "../ClinicSwitch"
import Toolbars from "containers/Toolbars"
import {
  useGetClinicLazyQuery,
  GetClinicQueryHookResult,
} from "./ClinicInnerWrapper.graphql.generated"
import QueryStatus from "components/QueryStatus"

type ContextType = { query: { data: GetClinicQueryHookResult["data"] } }

const ClinicInnerWrapper = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const match = useMatch("/clinic/:id/activity/:activityId")
  const { id } = useParams()

  const [loadQuery, query] = useGetClinicLazyQuery()

  useEffect(() => {
    if (match?.params.activityId) return
    loadQuery({
      variables: {
        id: id || "",
      },
    })
  }, [match?.params.activityId, loadQuery, id])

  if (query?.loading || !query?.data) return <QueryStatus.Loading />
  if (query.error) return <QueryStatus.Error />

  return match?.params.activityId ? (
    <Outlet />
  ) : (
    <>
      <Header
        leftArrow={!auth?.user?.clinic}
        title={query?.data?.clinic?.name || ""}
        redirect={() => navigate(-1)}
      />
      <Backdrop style={{ paddingBottom: "120px" }}>
        <ClinicSwitch />
        <Outlet context={{ query }} />
        {auth.user.clinic ? <Toolbars.Clinic /> : <Toolbars />}
      </Backdrop>
    </>
  )
}

export function useClinicInnerContext() {
  return useOutletContext<ContextType>()
}

export default ClinicInnerWrapper
