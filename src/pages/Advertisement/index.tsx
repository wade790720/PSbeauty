import styled from "./Advertisement.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useGetAdCardsQuery } from "./Advertisement.graphql.generated"
import { useParams } from "react-router-dom"
import Loading from "components/QueryStatus/Loading"

const Advertisement = () => {
  const { id } = useParams()
  const { data, loading } = useGetAdCardsQuery({ variables: { id: id || "" } })

  if (loading) return <Loading />
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
