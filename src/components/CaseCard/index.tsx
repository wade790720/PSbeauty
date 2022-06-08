import styled from "./CaseCard.module.scss"
import { ReactComponent as BookmarkFill } from "./BookmarkFill.svg"

export type CaseCardProps = {
  title: string
  clinic: string
  introduction: string
  images: string[]
  tags?: string[]
} & ReactProps.Component

const CaseCard = ({ ...props }: CaseCardProps) => {
  return (
    <div className={styled.wrapper}>
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
      <BookmarkFill className={styled.bookmark} />
    </div>
  )
}

export default CaseCard
