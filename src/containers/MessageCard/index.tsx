import useElementOnScreen from "hooks/useElementOnScreen"
import { useEffect } from "react"
import styled from "./MessageCard.module.scss"

export type MessageCardProps = {
  unread?: boolean
  title: string
  message: string
  last?: boolean
  isOneOnOne?: boolean
  fetchMore?: () => void
  onClick?: () => void
} & ReactProps.Component

const MessageCard = ({ ...props }: MessageCardProps) => {
  const { containerRef, isVisible } = useElementOnScreen({})

  useEffect(() => {
    if (props?.last && isVisible && props.fetchMore) {
      props?.fetchMore()
    }
  }, [props.last, props.fetchMore, isVisible])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      className={styled.wrapper}
      onClick={props.onClick}>
      <div className={styled.head}>
        <div className={styled.tag}>{props.isOneOnOne ? "1vs1" : "諮詢"}</div>
        <div className={styled.title}>{props.title}</div>
      </div>
      <div className={styled.message}>{props.message}</div>
      {props.unread && <div className={styled.unread} />}
    </div>
  )
}

export default MessageCard
