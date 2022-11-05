import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "./ClinicActivity.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import QueryStatus from "components/QueryStatus"
import { useGetClinicLazyQuery } from "./ClinicActivity.graphql.generated"
import useGo from "components/Router/useGo"

const ClinicActivity = () => {
  const { id, activityId } = useParams()
  const [loadQuery, { data, loading, error }] = useGetClinicLazyQuery()
  const go = useGo()

  useEffect(() => {
    loadQuery({
      variables: {
        id: id || "",
      },
    })
  }, [loadQuery, id])

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  const activities = data?.clinic?.activities?.filter(el => el?.id === activityId)[0]

  return (
    <>
      <Header leftArrow title={data?.clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <h2>診所活動</h2>
        <img className={styled.pic} src={activities?.image || ""} />
        <div className={styled.title}>{activities?.subject}</div>
        <div
          className={styled.clinic}
          onClick={() => go.toClinicInner({ id: id || "", tab: "info" })}>
          進入活動診所：{data?.clinic?.name}
        </div>
        <div
          className={styled.content}
          dangerouslySetInnerHTML={{ __html: activities?.content || "" }}
        />
      </Backdrop>
    </>
  )
}
export default ClinicActivity
