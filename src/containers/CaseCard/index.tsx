import { useEffect, useLayoutEffect, useState, useRef } from "react"
import styled from "./CaseCard.module.scss"
import Icon from "components/Icon"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import useElementOnScreen from "hooks/useElementOnScreen"
import {
  useCollectCaseMutation,
  useRemoveCollectedCaseMutation,
} from "./CaseCard.graphql.generated"

export type CaseCardProps = {
  title: string
  clinic: string
  clinicId: string
  introduction: string
  image: string
  isCollected: boolean
  tags?: string[]
  amount?: number // 收藏人數
  caseId: string
  last: boolean
  fetchMore?: () => void
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  const go = useGo()
  const auth = useAuth()
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageWidth, setImageWidth] = useState(0)
  const [isCollected, setIsCollected] = useState(false)
  const [amount, setAmount] = useState(props.amount)
  const { containerRef, isVisible } = useElementOnScreen({})

  useLayoutEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth)
    }
  }, [])

  useEffect(() => {
    if (props.last && isVisible && props.fetchMore) props.fetchMore()
  }, [props.last, props.fetchMore, isVisible])

  const [collectCaseMutation] = useCollectCaseMutation({
    variables: {
      caseId: props.caseId,
    },
    onCompleted: props => {
      setIsCollected(true)
      setAmount(props.collectCase?.collectedCount)
    },
  })

  const [removeCollectCaseMutation] = useRemoveCollectedCaseMutation({
    variables: {
      caseId: props.caseId,
    },
    onCompleted: props => {
      setIsCollected(false)
      setAmount(props?.removeCollectedCase?.collectedCount)
    },
  })

  useEffect(() => {
    setIsCollected(props.isCollected)
  }, [props.isCollected])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      className={styled.wrapper}
      style={props.style}
      onClick={() => go.toClinicCase({ clinicId: props.clinicId, caseId: props.caseId })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.clinic}>{props.clinic}</div>
      <div
        className={styled.content}
        dangerouslySetInnerHTML={{ __html: props.introduction || "" }}
      />
      <div className={styled.image} style={{ height: imageWidth }} ref={imageRef}>
        <img src={props.image} />
      </div>
      <div className={styled.tags}>
        {props.tags?.map((tag, idx) => (
          <div key={`tag-${idx}`}>
            <span>#</span>
            {tag}
          </div>
        ))}
      </div>
      <div
        className={styled["collect-block"]}
        onClick={e => {
          e.stopPropagation()
          if (!auth.user.id) return go.toSignIn()
          isCollected ? removeCollectCaseMutation() : collectCaseMutation()
        }}>
        {isCollected ? (
          <Icon name="BookmarkFill" className={styled["bookmark-fill"]} />
        ) : (
          <Icon name="BookmarkSimple" className={styled["bookmark-simple"]} />
        )}
        <div className={styled.amount}>{amount}</div>
      </div>
    </div>
  )
}

export default CaseCard
