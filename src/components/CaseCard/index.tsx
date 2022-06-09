import styled from "./CaseCard.module.scss"
import { ReactComponent as BookmarkFill } from "./BookmarkFill.svg"
import { ReactComponent as BookmarkSimple } from "./BookmarkSimple.svg"

export type CaseCardProps = {
  title: string
  clinic: string
  introduction: string
  images: string[]
  isCollected: boolean
  tags?: string[]
  amount?: string // 收藏人數
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  console.log("### amount", props.amount)
  return (
    <div className={styled.wrapper} style={props.style}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.clinic}>{props.clinic}</div>
      <div className={styled.content}>{props.introduction}</div>
      <div className={styled.images}>
        {props.images?.map((image, idx) => (
          <img key={`image-${idx}`} src={image} />
        ))}
      </div>
      <div className={styled.tags}>
        {props.tags?.map((tag, idx) => (
          <div key={`tag-${idx}`}>
            <span>#</span>
            {tag}
          </div>
        ))}
      </div>
      <div className={styled["collect-block"]}>
        {props.isCollected ? (
          <BookmarkFill className={styled["bookmark-fill"]} />
        ) : (
          <BookmarkSimple className={styled["bookmark-simple"]} />
        )}
        <div className={styled.amount}>{props.amount}</div>
      </div>
    </div>
  )
}

export default CaseCard
