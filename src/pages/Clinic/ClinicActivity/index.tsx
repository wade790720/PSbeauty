import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "./ClinicActivity.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useGetClinicLazyQuery } from "./ClinicActivity.graphql.generated"
import Loading from "components/QueryStatus/Loading"

const ClinicActivity = () => {
  const { id, activityId } = useParams()
  const [loadQuery, query] = useGetClinicLazyQuery()

  useEffect(() => {
    loadQuery({
      variables: {
        id: id || "",
      },
    })
  }, [loadQuery, id])

  const data = query?.data?.clinic?.activities?.filter(el => el?.id === activityId)[0]

  if (!data) return <Loading />
  return (
    <>
      <Header leftArrow title={query?.data?.clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <h2>診所活動</h2>
        <img className={styled.pic} src={data?.image || ""} />
        <div className={styled.title}>{data?.subject}</div>
        <div className={styled.content} dangerouslySetInnerHTML={{ __html: data?.content || "" }} />
      </Backdrop>
    </>
  )
}
export default ClinicActivity
