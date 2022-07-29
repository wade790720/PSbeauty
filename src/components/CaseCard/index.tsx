import { useState } from "react"
import styled from "./CaseCard.module.scss"
import Icon from "components/Icon"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import {
  useCollectCaseMutation,
  useRemoveCollectedCaseMutation,
} from "./CaseCard.graphql.generated"

export type CaseCardProps = {
  title: string
  clinic: string
  clinicId: string
  introduction: string
  images: string[]
  isCollected: boolean
  tags?: string[]
  amount?: number // 收藏人數
  caseId: string
  last: boolean
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  const go = useGo()
  const auth = useAuth()
  const [isCollected, setIsCollected] = useState(props.isCollected)

  const [collectCaseMutation] = useCollectCaseMutation({
    variables: {
      caseId: props.caseId,
    },
    onCompleted: () => setIsCollected(true),
  })

  const [removeCollectCaseMutation] = useRemoveCollectedCaseMutation({
    variables: {
      caseId: props.caseId,
    },
    onCompleted: () => setIsCollected(false),
  })

  return (
    <div
      className={styled.wrapper}
      style={props.style}
      onClick={() => go.toClinicCase({ clinicId: props.clinicId, caseId: props.caseId })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.clinic}>{props.clinic}</div>
      <div
        className={styled.content}
        dangerouslySetInnerHTML={{ __html: props.introduction || "" }}
      />
      <div className={styled.images}>
        {props.images?.map((image, idx) => {
          return (
            <div key={`image-${idx}`} className={styled.image}>
              <img src={image} />
              {idx === 0 && <div className={styled.label}>Before</div>}
              {idx === 1 && <div className={styled.label}>After</div>}
            </div>
          )
        })}
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
        <div className={styled.amount}>{props.amount}</div>
      </div>
    </div>
  )
}

export default CaseCard
