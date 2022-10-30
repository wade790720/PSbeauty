import styled from "./Tag.module.scss"
import useGo from "components/Router/useGo"

type TagProps = {
  tags?: {
    id: string
    name: string
  }[]
} & ReactProps.Component

const Tag = (props: TagProps) => {
  const go = useGo()

  return (
    <div className={styled.tags} style={props.style}>
      {props.tags?.map((tag, idx) => (
        <div
          key={`tag-${idx}`}
          onClick={e => {
            e.stopPropagation()
            go.toSearchTag(tag.id, tag.name)
          }}>
          <span>#</span>
          {tag?.name}
        </div>
      ))}
    </div>
  )
}

export default Tag
