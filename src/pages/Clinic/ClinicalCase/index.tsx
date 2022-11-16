import styled from "./ClinicalCase.module.scss"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import Icon from "components/Icon"
import Tag from "containers/Tag"
import {
  useGetCaseQuery,
  useGetCollectItemsLazyQuery,
  useCollectCaseMutation,
  useRemoveCollectedCaseMutation,
} from "./ClinicalCase.graphql.generated"
import { useEffect, useState, useLayoutEffect, useRef } from "react"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useParams } from "react-router-dom"
import QueryStatus from "components/QueryStatus"
import PullToRefresh from "react-simple-pull-to-refresh"
import Loading from "components/Loading"

const ClinicalCase = () => {
  const go = useGo()
  const auth = useAuth()
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageWidth, setImageWidth] = useState(0)
  const { caseId } = useParams()
  const [loadGetCollectItemsQuery, getCollectItemsQuery] = useGetCollectItemsLazyQuery({
    fetchPolicy: "no-cache",
  })
  const { data, loading, error, refetch } = useGetCaseQuery({
    variables: {
      id: caseId || "",
    },
  })

  const [isCollected, setIsCollected] = useState(false)
  const [showCopy, setShowCopy] = useState(false)

  useLayoutEffect(() => {
    if (imageRef.current && !loading) {
      setImageWidth(imageRef.current.clientWidth)
    }
  }, [loading])

  useEffect(() => {
    if (auth.user.id) loadGetCollectItemsQuery()
  }, [auth.user.id])

  useEffect(() => {
    let timeoutID: ReturnType<typeof setTimeout> | null = null
    if (showCopy) {
      timeoutID = setTimeout(() => {
        setShowCopy(false)
      }, 500)
    }
    return () => {
      timeoutID && clearTimeout(timeoutID)
    }
  }, [showCopy])

  useEffect(() => {
    setIsCollected(
      !!getCollectItemsQuery?.data?.me?.userCollectedCases?.find(el => el?.id === caseId),
    )
  }, [getCollectItemsQuery?.data?.me?.userCollectedCases])

  const [collectCaseMutation] = useCollectCaseMutation({
    variables: {
      caseId: caseId || "",
    },
    update(_, mutationResult) {
      if (mutationResult?.data?.collectCase?.userId) setIsCollected(true)
    },
  })

  const [removeCollectedCaseMutation] = useRemoveCollectedCaseMutation({
    variables: {
      caseId: caseId || "",
    },
    update(_, mutationResult) {
      if (mutationResult?.data?.removeCollectedCase) setIsCollected(false)
    },
  })

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <>
      <Header leftArrow />
      <Backdrop className={styled.wrapper}>
        <PullToRefresh
          onRefresh={async () => refetch()}
          pullingContent={Loading.Static()}
          refreshingContent={Loading()}>
          <div className={styled.outer}>
            <div className={styled.title}>{data?.case?.title}</div>
            <div
              className={styled.clinic}
              onClick={() => go.toClinicInner({ id: data?.case?.clinic?.id || "", tab: "info" })}>
              診所介紹：{data?.case?.clinic?.name}
            </div>
            <div className={styled.picBlock}>
              {showCopy && <span className={styled.copy}>已複製連結</span>}
              <div className={styled.image} style={{ height: imageWidth }} ref={imageRef}>
                <img src={data?.case?.image || ""} />
              </div>
            </div>
            <div
              className={styled.content}
              dangerouslySetInnerHTML={{ __html: data?.case?.description || "" }}
            />
            <div
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ url: window.location.href })
                } else {
                  const url = `https://line.me/R/share?text=${encodeURI(window.location.href)}`
                  window.open(url, "_blank")
                }
              }}>
              <Icon className={styled.share} name="Share" />
            </div>
            <Tag
              tags={data?.case?.categories?.map(el => ({
                id: el?.id || "",
                name: el?.name || "",
              }))}
            />
            <div
              className={styled["collect-block"]}
              onClick={e => {
                e.stopPropagation()
                if (!auth.user.id) return go.toSignIn()
                isCollected ? removeCollectedCaseMutation() : collectCaseMutation()
              }}>
              <Icon
                name={isCollected ? "BookmarkFill" : "BookmarkSimple"}
                className={styled["bookmark-simple"]}
              />
            </div>
          </div>
        </PullToRefresh>
      </Backdrop>
    </>
  )
}
export default ClinicalCase
