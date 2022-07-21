import styled from "./CaseCard.module.scss"
import Icon from "components/Icon"
import useGo from "components/Router/useGo"
import { useAuth } from "hooks/useAuth"
import { useCollectCaseMutation } from "./CaseCard.graphql.generated"

export type CaseCardProps = {
  title: string
  clinic: string
  clinicId: string
  introduction: string
  images: string[]
  isCollected: boolean
  tags?: string[]
  amount?: string // 收藏人數
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  const go = useGo()
  const auth = useAuth()

  const [collectCaseMutation] = useCollectCaseMutation({
    variables: {
      caseId: props.clinicId,
    },
    update(cache, mutationResult) {
      //   if (mutationResult.data?.deleteGroupComparison?.isDeleted) {
      //     cache.modify({
      //       fields: {
      //         groupComparisonList(existingListRefs: Reference[] = [], { readField }) {
      //           return existingListRefs.filter(ref => collectedId !== readField("id", ref))
      //         },
      //       },
      //     })
      //   }
    },
  })

  return (
    <div
      className={styled.wrapper}
      style={props.style}
      onClick={() => go.toClinicCase({ id: props.clinicId })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.clinic}>{props.clinic}</div>
      <div className={styled.images}>
        {props.images?.map((image, idx) => (
          <img key={`image-${idx}`} src={image} />
        ))}
      </div>
      <div
        className={styled.content}
        dangerouslySetInnerHTML={{ __html: props.introduction || "" }}
      />
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
          // TODO: add collect function
          !auth.user.id ? go.toSignIn() : collectCaseMutation()
        }}>
        {props.isCollected ? (
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
