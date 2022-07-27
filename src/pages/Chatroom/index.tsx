import cx from "classnames"
import HistoryRecordCard from "components/HistoryRecordCard"
import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import { useAuth } from "hooks/useAuth"
import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useGeTopicDetailQuery, useReplyTopicMutation } from "./Chatroom.graphql.generated"
import styled from "./Chatroom.module.scss"
import Front from "./Front.png"
import Left from "./Left.png"
import Right from "./Right.png"
import { ReactComponent as UploadImage } from "./UploadImage.svg"
import useRealtime from "./useRealtime"

interface MessageRow {
  content: string
  userId: string
  key: string
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
    scrollToBottom()
  }, [topicDetail.loading])

  if (topicDetail.loading) {
    return <div>loading</div>
  }

  const newMessage = (msg: string) => {
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

  messages.push(...realtimes)
  return (
    <>
      <Header leftArrow title={clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        <div className={cx(styled.row, styled.center)}>
          <div className={styled.time}>Yesterday 9:41</div>
        </div>
        <div className={cx(styled.row, styled.center)}>
          <HistoryRecordCard
            title={consult?.subject || ""}
            date="2022-05-18｜剩餘3天"
            images={[Left, Front, Right]}
            introduction="諮詢內容簡介說明文字，請將症例相關說明文字，僅供參考排版樣式，內容簡介...顯示更多"
            tags={["蘋果肌", "痘痘針", "玻尿酸", "蘋果肌2", "痘痘針2", "玻尿酸2"]}
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
    </>
  )
}
export default Chatroom
