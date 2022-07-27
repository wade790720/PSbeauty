import { useEffect } from "react"
import { Outlet, useOutletContext, useMatch, useParams, useLocation } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import Header from "components/Layout/Header"
import Backdrop from "components/Layout/Backdrop"
import ClinicSwitch from "../ClinicSwitch"
import BottomNavigation from "components/BottomNavigation"
import {
  useGetClinicLazyQuery,
  GetClinicQueryHookResult,
} from "./ClinicInnerWrapper.graphql.generated"
import Loading from "components/QueryStatus/Loading"

type ContextType = { query: { data: GetClinicQueryHookResult["data"] } }

const ClinicInnerWrapper = () => {
  const auth = useAuth()
  const match = useMatch("/clinic/:id/activity/:activityId")
  const { id } = useParams()
  const location = useLocation()

  const [loadQuery, query] = useGetClinicLazyQuery()

  useEffect(() => {
    if (match?.params.activityId) return
    loadQuery({
      variables: {
        id: id || "",
      },
    })
  }, [match?.params.activityId, loadQuery, id])

  if (query?.loading || !query?.data) return <Loading />
  return match?.params.activityId ? (
    <Outlet />
  ) : (
    <>
      <Header
        leftArrow={!(location?.pathname.includes("/inner/info") && auth?.user?.clinic)}
        title={query?.data?.clinic?.name || ""}
      />
      <Backdrop style={{ paddingBottom: "49px" }}>
        <ClinicSwitch />
        <Outlet context={{ query }} />
        {auth.user.clinic ? <BottomNavigation.Chat /> : <BottomNavigation />}
      </Backdrop>
    </>
  )
}

export function useClinicInnerContext() {
  return useOutletContext<ContextType>()
}

export default ClinicInnerWrapper
