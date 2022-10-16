import cx from "classnames"
import HistoryRecordCard from "containers/HistoryRecordCard"
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
import QueryStatus from "components/QueryStatus"
import uuid from "utils/uuid"
import { storage } from "firebaseClient"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import ImageViewer from "./ImageViewer"

interface MessageRow {
  content: string
  userId: string
  key: string
  contentType: string
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
  const [viewerUrl, setViewerUrl] = useState("")
  const realtimesRef = useRef<MessageRow[]>()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLInputElement>(null)

  const topicDetail = useGeTopicDetailQuery({
    variables: {
      input: id || "",
    },
    fetchPolicy: "no-cache",
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
          contentType: msg.contentType || "",
        },
      ]
      setRealtimes(newRt)
      readReply({
        variables: {
          input: {
            topicId: id || "",
          },
        },
      })
      scrollToBottom()
    },
  })

  useEffect(() => {
    readReply({
      variables: {
        input: {
          topicId: id || "",
        },
      },
    })
  }, [])

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  useEffect(() => {
    scrollToBottom()
  }, [topicDetail.loading])

  if (topicDetail.loading) return <QueryStatus.Loading />
  if (topicDetail.error) return <QueryStatus.Error />

  const newMessage = (msg: string, consulteeId?: string) => {
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
        await notify({
          content: msg,
          userId: auth.user.id,
          contentType: "text",
          consultedId: consulteeId,
        })
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
    contentType: r?.contentType || "",
  }))

  const consultAt = dayjs((consult?.consultAt || 0) * 1000)
  const endDay = consultAt.add(consult?.days || 0, "day")
  const today = dayjs()
  const timeleft = endDay.diff(today, "day")
  const oneOnOne = consult?.oneOnOne
  const images = (consult?.images || []).map(v => v || "")
  const categories = (consult?.categories || []).map(v => v?.name || "")
  const isClinic = !!auth.user.clinic

  messages.push(...realtimes)

  const consulteeId =
    (auth.user.id == consult?.poster?.id ? clinic?.owners?.[0]?.id : consult?.poster?.id) ||
    undefined

  return (
    <>
      <Header leftArrow title={clinic?.name || ""} />
      <Backdrop className={styled.wrapper}>
        {/* <div className={cx(styled.row, styled.center)}></div> */}
        {isClinic
          ? null
          : !clinic?.paid && (
              <div className={cx(styled.row, styled.center)}>
                (診所非付費會員，可能無法回覆訊息)
              </div>
            )}
        {!oneOnOne && (
          <div className={cx(styled.row, styled.center)}>
            <HistoryRecordCard
              id={consult?.id || ""}
              title={consult?.subject || ""}
              date={`起始日 ${f(consultAt)}｜到期日 ${f(endDay)}${
                timeleft > 0 ? `(剩餘${timeleft}天)` : `(已過期)`
              }`}
              images={images}
              introduction={consult?.content || ""}
              tags={categories}
            />
          </div>
        )}
        {messages.map(v => {
          if (v?.userId == auth.user.id) {
            return (
              <div className={cx(styled.row, styled.right)} key={v?.key}>
                {v?.contentType === "text" && <div className={styled.message}>{v?.content}</div>}
                {v?.contentType === "image" && (
                  <img
                    className={styled.image}
                    src={v?.content}
                    onClick={() => {
                      setViewerUrl(v?.content)
                    }}
                  />
                )}
              </div>
            )
          } else {
            return (
              <div className={cx(styled.row, styled.left)} key={v?.key}>
                {auth.user.clinic ? (
                  <div className={styled["user-avatar"]}>U</div>
                ) : (
                  <img className={styled.avatar} src="/img/chatroom-user.png" />
                )}
                {v?.contentType === "text" && <div className={styled.message}>{v?.content}</div>}
                {v?.contentType === "image" && (
                  <img
                    className={styled.image}
                    src={v?.content}
                    onClick={() => {
                      setViewerUrl(v?.content)
                    }}
                  />
                )}
              </div>
            )
          }
        })}
        <div ref={messagesEndRef}></div>
      </Backdrop>
      {timeleft > 0 && (
        <div className={styled.input}>
          <div className={styled.control}>
            <UploadImage
              onClick={() => {
                imageRef.current?.click()
              }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={imageRef}
              onChange={e => {
                const file = e.target?.files?.[0]
                if (file) {
                  const storageRef = ref(storage, `image/${uuid()}/${file?.name || ""}`)
                  uploadBytes(storageRef, file)
                    .then(snapshot => getDownloadURL(snapshot.ref))
                    .then(image => {
                      replyTopicMutation({
                        variables: {
                          input: {
                            topicId: id || "",
                            content: image,
                            contentType: "image",
                          },
                        },
                        async onCompleted() {
                          await notify({
                            content: image,
                            userId: auth.user.id,
                            contentType: "image",
                            consultedId: consulteeId,
                          })
                          if (imageRef.current) {
                            imageRef.current.value = ""
                          }
                          msgInputRef.current?.focus()
                        },
                      })
                    })
                }
              }}
            />
            {isClinic ? (
              <>
                <input
                  ref={msgInputRef}
                  value={message}
                  disabled={!clinic?.paid}
                  placeholder={clinic?.paid ? "" : "付費會員即可回覆訊息"}
                  onChange={e => setMessage(e.target.value)}></input>
                {clinic?.paid ? (
                  <div className={styled.submit} onClick={() => newMessage(message, consulteeId)}>
                    送出
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <input
                  ref={msgInputRef}
                  value={message}
                  onChange={e => setMessage(e.target.value)}></input>
                <div className={styled.submit} onClick={() => newMessage(message, consulteeId)}>
                  送出
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <ImageViewer url={viewerUrl} clickClose={() => setViewerUrl("")} />
    </>
  )
}
export default Chatroom
