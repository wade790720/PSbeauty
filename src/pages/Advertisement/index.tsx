import styled from "./Advertisement.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useGetAdCardsQuery } from "./Advertisement.graphql.generated"
import { useParams } from "react-router-dom"
import QueryStatus from "components/QueryStatus"

const Advertisement = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetAdCardsQuery({ variables: { id: id || "" } })

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />
  return (
    <>
      <Header leftArrow />
      <Backdrop className={styled.wrapper}>
        <div className={styled.title}>{data?.adCards?.nodes?.[0]?.title}</div>
        <img className={styled.pic} src={data?.adCards?.nodes?.[0]?.image || ""} />
        <div
          className={styled.content}
          dangerouslySetInnerHTML={{ __html: data?.adCards?.nodes?.[0]?.content || "" }}
        />
      </Backdrop>
    </>
  )
}
export default Advertisement
