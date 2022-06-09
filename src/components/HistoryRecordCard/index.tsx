import { useState, useRef, useLayoutEffect } from "react"
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
  const [over, setOver] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const clientHeight = ref.current?.clientHeight || 0
    const scrollHeight = ref.current?.scrollHeight || 0
    if (clientHeight && scrollHeight > clientHeight) {
      setOver(true)
    }
  }, [])

  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.date}>{props.date}</div>
      <div className={styled.images}>
        {props.images?.map((image, idx) => (
          <img key={`img-${idx}`} src={image} />
        ))}
      </div>
      <div className={cx(styled.content, open && styled.open)} ref={ref}>
        {props.introduction}
      </div>
      {over && !open && (
        <span className={styled.more} onClick={() => setOpen(true)}>
          顯示更多
        </span>
      )}
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
