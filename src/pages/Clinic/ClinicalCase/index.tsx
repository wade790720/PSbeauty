import styled from "./ClinicalCase.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import Icon from "components/Icon"
import {
  useGetCaseQuery,
  useGetCollectItemsQuery,
  useCollectCaseMutation,
  useRemoveCollectedCaseMutation,
} from "./ClinicalCase.graphql.generated"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "components/QueryStatus/Loading"

const ClinicalCase = () => {
  const { caseId } = useParams()
  const getCollectItemsQuery = useGetCollectItemsQuery({ fetchPolicy: "no-cache" })
  const { data, loading } = useGetCaseQuery({
    variables: {
      id: caseId || "",
    },
  })

  const [isCollected, setIsCollected] = useState(false)

  useEffect(() => {
    setIsCollected(
      !!getCollectItemsQuery?.data?.me?.userCollectedCases?.find(el => el?.id === caseId),
    )
  }, [getCollectItemsQuery?.data?.me?.userCollectedCases])

  const [collectCaseMutation] = useCollectCaseMutation({
    variables: {
      caseId: caseId || "",
    },
    update(cache, mutationResult) {
      if (mutationResult?.data?.collectCase?.userId) setIsCollected(true)
    },
  })

  const [removeCollectedCaseMutation] = useRemoveCollectedCaseMutation({
    variables: {
      caseId: caseId || "",
    },
    update(cache, mutationResult) {
      if (mutationResult?.data?.removeCollectedCase) setIsCollected(false)
    },
  })

  if (loading) return <Loading />

  return (
    <>
      <Header leftArrow />
      <Backdrop className={styled.wrapper}>
        <div className={styled.outer}>
          <div className={styled.title}>{data?.case?.title}</div>
          <div className={styled.clinic}>{data?.case?.clinic?.name}</div>
          <div className={styled.images}>
            <div className={styled.image}>
              <img src={data?.case?.beforeImage || ""} />
              <div className={styled.label}>Before</div>
            </div>
            <div className={styled.image}>
              <img src={data?.case?.afterImage || ""} />
              <div className={styled.label}>After</div>
            </div>
          </div>
          <div
            className={styled.content}
            dangerouslySetInnerHTML={{ __html: data?.case?.description || "" }}
          />
          <div className={styled.tags}>
            {data?.case?.categories?.map(el => (
              <div key={el?.id}>
                <span>#</span>
                {el?.name}
              </div>
            ))}
          </div>
          <div
            className={styled["collect-block"]}
            onClick={() => (isCollected ? removeCollectedCaseMutation() : collectCaseMutation())}>
            <Icon
              name={isCollected ? "BookmarkFill" : "BookmarkSimple"}
              className={styled["bookmark-simple"]}
            />
          </div>
        </div>
      </Backdrop>
    </>
  )
}
export default ClinicalCase
