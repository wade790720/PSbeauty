import { useGo } from "components/Router"
import useElementOnScreen from "hooks/useElementOnScreen"
import { useEffect } from "react"
import styled from "./MessageCard.module.scss"

export type MessageCardProps = {
  topicId?: string
  unread?: boolean
  title: string
  message: string
  last?: boolean
  fetchMore?: () => void
} & ReactProps.Component

const MessageCard = ({ ...props }: MessageCardProps) => {
  const go = useGo()
  const { containerRef, isVisible } = useElementOnScreen({})

  useEffect(() => {
    console.log("fetch more", props)
    if (props?.last && isVisible && props.fetchMore) {
      props?.fetchMore()
    }
  }, [props.last, props.fetchMore, isVisible])

  return (
    <div
      ref={props.last ? (containerRef as unknown as React.RefObject<HTMLDivElement>) : null}
      className={styled.wrapper}
      onClick={() => go.toChatroom({ id: props.topicId || "" })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.message}>{props.message}</div>
      {props.unread && <div className={styled.unread} />}
    </div>
  )
}

export default MessageCard
