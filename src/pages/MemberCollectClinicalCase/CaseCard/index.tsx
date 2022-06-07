import styled from "./CaseCard.module.scss"
import { ReactComponent as BookmarkFill } from "./BookmarkFill.svg"
import imgBefore from "./Before.png"
import imgAfter from "./After.png"

export type CaseCardProps = {
  title: string
  clinic: string
  introduction: string
  tags?: string[]
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled["title-wrapper"]}>
        <div className={styled.title}>{props.title}</div>
        <BookmarkFill className={styled.bookmark} />
      </div>
      <div className={styled.clinic}>{props.clinic}</div>
      <div className={styled.content}>{props.introduction}</div>
      <div className={styled["picture-block"]}>
        <img src={imgBefore} />
        <img src={imgAfter} />
      </div>
      <div className={styled["tag-block"]}>
        {props.tags?.map((tag, idx) => (
          <div key={`tag-${idx}`}>
            <span>#</span>
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseCard
