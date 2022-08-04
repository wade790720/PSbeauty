import { useEffect } from "react"
import styled from "./ClinicInner.module.scss"
import Icon from "components/Icon"
import Button from "components/Button"
import CaseCard from "components/CaseCard"
import Banner from "components/Banner"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"
import { useGetCollectedCaseLazyQuery } from "graphql/queries/getCollectedCase.graphql.generated"
import { useParams } from "react-router-dom"

const ClinicInner = () => {
  const go = useGo()
  const auth = useAuth()
  const {
    query: { data },
  } = useClinicInnerContext()
  const [loadGetCollectedCaseQuery, getCollectedCaseQuery] = useGetCollectedCaseLazyQuery({
    fetchPolicy: "no-cache",
  })
  const { id } = useParams()

  const adImages = data?.clinic?.images
    ?.map(el => ({
      image: el?.image || "",
      clinicId: el?.id || "",
      targetId: el?.targetId || "",
      redirectType: el?.redirectType,
      sort: el?.sort || 0,
    }))
    ?.sort((prev, next) => prev.sort - next.sort)

  useEffect(() => {
    if (auth.user.id) loadGetCollectedCaseQuery()
  }, [auth.user.id, loadGetCollectedCaseQuery])

  return (
    <div className={styled.wrapper}>
      <Banner height="214px" images={adImages} />
      <div className={styled.content}>
        <div className={styled.contact}>
          <Icon name="mapPin" />
          <span>
            {data?.clinic?.county}
            {data?.clinic?.town}
            {data?.clinic?.address}
          </span>
        </div>
        <div className={styled.contact}>
          <Icon name="phone" />
          <span>{data?.clinic?.phone}</span>
        </div>
        <div className={styled.contact}>
          <Icon name="globeSimple" />
          <span>{data?.clinic?.web}</span>
        </div>
        <div className={styled.information}>
          <div className={styled.case}>
            <div className={styled.block} />
            案例數 <span>{data?.clinic?.caseCount}</span>
          </div>
          <div className={styled.reply}>
            <div className={styled.block} />
            回覆數 <span>{data?.clinic?.consultReplyCount}</span>
          </div>
        </div>
      </div>
      {data?.clinic?.cases?.map(el => (
        <CaseCard
          key={el?.id}
          amount={el?.collectedCount}
          isCollected={
            getCollectedCaseQuery?.data?.me?.userCollectedCases?.some(
              item => item?.id === el?.id,
            ) || false
          }
          title={el?.title || "　"}
          clinic={data?.clinic?.name || ""}
          clinicId={id || ""}
          introduction={el?.description || ""}
          images={[el?.beforeImage || "", el?.afterImage || ""]}
          tags={el?.categories?.map(tag => tag?.name || "")}
          caseId={el?.id || ""}
          last={false}
        />
      ))}
      {!auth.user.clinic && (
        <Button
          className={styled.button}
          onClick={() => go.toChatroom({ id: "62ca5e512448688161c0a4cc" })}>
          <Icon name="chat" className={styled.chat} />
          一對一匿名諮詢
        </Button>
      )}
    </div>
  )
}
export default ClinicInner
