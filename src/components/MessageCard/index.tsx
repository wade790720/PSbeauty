import { useGo } from "components/Router"
import styled from "./MessageCard.module.scss"

export type MessageCardProps = {
  topicId?: string
  unread?: boolean
  title: string
  message: string
} & ReactProps.Component

const MessageCard = ({ ...props }: MessageCardProps) => {
  const go = useGo()

  return (
    <div className={styled.wrapper} onClick={() => go.toChatroom({ id: props.topicId || "" })}>
      <div className={styled.title}>{props.title}</div>
      <div className={styled.message}>{props.message}</div>
      {props.unread && <div className={styled.unread} />}
    </div>
  )
}

export default MessageCard
