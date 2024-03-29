import { useState, useRef, useLayoutEffect, useEffect } from "react"
import styled from "./HistoryRecordCard.module.scss"
import cx from "classnames"
import Switch from "react-switch"
import Tag from "containers/Tag"

export type HistoryRecordCardProps = {
  id: string
  title: string
  date: string
  toggle?: boolean
  images: string[]
  introduction: string
  tags?: { id: string; name: string }[]
  onChange?: ({ id, enable }: { id: string; enable: boolean }) => void
} & ReactProps.Component

const HistoryRecordCard = ({ ...props }: HistoryRecordCardProps) => {
  const [over, setOver] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setToggle(props.toggle)
  }, [props.toggle])

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
      {props.images.length > 0 && (
        <div className={styled.images}>
          {props.images.map((image, idx) => (
            <img key={`img-${idx}`} src={image} />
          ))}
        </div>
      )}
      <div className={cx(styled.content, open && styled.open)} ref={ref}>
        {props.introduction}
      </div>
      {over && !open && (
        <span className={styled.more} onClick={() => setOpen(true)}>
          顯示更多
        </span>
      )}
      <Tag tags={props.tags} style={{ marginTop: "24px" }} />
      {typeof props.toggle === "boolean" && (
        <div className={styled.toggle}>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            width={51}
            height={31}
            onColor="#18a0cb"
            offColor="#CBCBCD"
            activeBoxShadow="0 0 2px 3px #18a0cb33"
            checked={toggle || false}
            onChange={() => {
              if (props.onChange) {
                setToggle(!toggle)
                props.onChange({ id: props.id, enable: !props.toggle })
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default HistoryRecordCard
