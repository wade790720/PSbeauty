import cx from "classnames"
import HistoryRecordCard from "components/HistoryRecordCard"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import dayjs from "dayjs"
import { useAuth } from "hooks/useAuth"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import {
  useGeTopicDetailQuery,
  useReadReplyMutation,
  useReplyTopicMutation,
} from "./Chatroom.graphql.generated"
import styled from "./Chatroom.module.scss"
import { ReactComponent as UploadImage } from "./UploadImage.svg"
import useRealtime from "./useRealtime"
import Loading from "components/QueryStatus/Loading"

interface MessageRow {
  content: string
  userId: string
  key: string
}

const f = (dayjs: dayjs.Dayjs) => {
  return dayjs.format("YYYY-MM-DD")
}

const Chatroom = () => {
  const { id } = useParams()
  const auth = useAuth()
  const msgInputRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState("")
  const [realtimes, setRealtimes] = useState<MessageRow[]>([])
  const realtimesRef = useRef<MessageRow[]>()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const topicDetail = useGeTopicDetailQuery({
    variables: {
      input: id || "",
    },
  })

  const [replyTopicMutation] = useReplyTopicMutation()

  const [readReply] = useReadReplyMutation()

  realtimesRef.current = realtimes
  const notify = useRealtime({
    chatroomId: id || "",
    onMessage: msg => {
      const rt = realtimesRef.current || []
      const newRt = [
        ...rt,
        {
          content: msg.content || "",
          key: msg.timestampMillis + "",
          userId: msg.userId || "",
        },
      ]
      setRealtimes(newRt)
      scrollToBottom()
    },
  })

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  useEffect(() => {
    readReply({
      variables: {
        input: {
          topicId: id || "",
        },
      },
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [topicDetail.loading])

  if (topicDetail.loading) {
    return <Loading />
  }

  const newMessage = (msg: string) => {
    if (!msg) {
      return
    }

    replyTopicMutation({
      variables: {
        input: {
          topicId: id || "",
          content: msg,
          contentType: "text",
        },
      },
      async onCompleted() {
        await notify({ content: msg, userId: auth.user.id })
        setMessage("")
        msgInputRef.current?.focus()
      },
    })
  }

  const clinic = topicDetail.data?.topic?.clinic
  const consult = topicDetail.data?.topic?.consult
  const replies = topicDetail.data?.topic?.replies || []

  const messages: MessageRow[] = replies.map(r => ({
    content: r?.content || "",
    key: r?.id || "",
    userId: r?.userId || "",
  }))

  const consultAt = dayjs((consult?.consultAt || 0) * 1000)
  const endDay = consultAt.add(consult?.days || 0, "day")
  // const today = dayjs("2022/7/15") // 測試
  const today = dayjs()
  const timeleft = endDay.diff(today, "day")

  const images = (consult?.images || []).map(v => v || "")
  const categories = (consult?.categories || []).map(v => v?.name || "")

  messages.push(...realtimes)
  return (
    <>
      <Header leftArrow title={clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <div className={cx(styled.row, styled.center)}>
          {/* <div className={styled.time}>Yesterday 9:41</div> */}
        </div>
        <div className={cx(styled.row, styled.center)}>
          <HistoryRecordCard
            title={consult?.subject || ""}
            date={`起始日 ${f(consultAt)}｜到期日 ${f(endDay)}${
              timeleft > 0 ? `(剩餘${timeleft}天)` : `(已過期)`
            }`}
            images={images}
            introduction={consult?.content || ""}
            tags={categories}
          />
        </div>
        {messages.map(v => {
          if (v?.userId == auth.user.id) {
            return (
              <div className={cx(styled.row, styled.right)} key={v?.key}>
                <div className={styled.message}>{v?.content}</div>
              </div>
            )
          } else {
            return (
              <div className={cx(styled.row, styled.left)} key={v?.key}>
                <img className={styled.avatar} src="/img/chatroom-user.png" />
                <div className={styled.message}>{v?.content}</div>
              </div>
            )
          }
        })}
        <div ref={messagesEndRef}></div>
      </Backdrop>
      {timeleft > 0 && (
        <div className={styled.input}>
          <div className={styled.control}>
            <UploadImage />
            <input
              ref={msgInputRef}
              value={message}
              onChange={e => setMessage(e.target.value)}></input>
            <div className={styled.submit} onClick={() => newMessage(message)}>
              送出
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Chatroom
