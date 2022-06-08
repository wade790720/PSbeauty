import { useState } from "react"
import styled from "./HistoryRecordCard.module.scss"
import cx from "classnames"
import Switch from "react-switch"

export type HistoryRecordCardProps = {
  title: string
  date: string
  toggle?: boolean
  images: string[]
  introduction: string
  tags?: string[]
} & ReactProps.Component

const HistoryRecordCard = ({ ...props }: HistoryRecordCardProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.date}>{props.date}</div>
      <div className={styled.images}>
        {props.images?.map((image, idx) => (
          <img key={`img-${idx}`} src={image} />
        ))}
      </div>
      <div className={cx(styled.content, open && styled.open)}>
        {open ? (
          <span className={styled.more} onClick={() => setOpen(false)}>
            收合
          </span>
        ) : (
          <span className={styled.more} onClick={() => setOpen(true)}>
            ...顯示更多
          </span>
        )}
        {props.introduction}
      </div>
      <div className={styled.tags}>
        {props.tags?.map((tag, idx) => (
          <div key={`tag-${idx}`}>
            <span>#</span>
            {tag}
          </div>
        ))}
      </div>
      {typeof props.toggle === "boolean" && (
        <div className={styled.toggle}>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            width={51}
            height={31}
            onColor="#7873E5"
            offColor="#CBCBCD"
            activeBoxShadow="0 0 2px 3px #7873E533"
            checked={props.toggle}
            onChange={() => {
              console.log("toggle", props.toggle)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default HistoryRecordCard
