import { useState, useRef } from "react"
import cx from "classnames"
import styled from "./MemberInbox.module.scss"
import Header from "components/Layout/Header"
import MessageCard from "containers/MessageCard"
import { useGetMemberInboxQuery, UserInboxesFragment } from "./MemberInbox.graphql.generated"
import QueryStatus from "components/QueryStatus"
import { firestore } from "../../../firebaseClient"
import { useEffect, useMemo } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { useAuth } from "hooks/useAuth"
import { useGo } from "components/Router"
import { useNavigate } from "react-router-dom"
import PullToRefresh from "react-simple-pull-to-refresh"
import Loading from "components/Loading"

const MemberInbox = () => {
  const go = useGo()
  const auth = useAuth()
  const navigate = useNavigate()
  const [next, setNext] = useState(false)
  const { data, loading, error, refetch } = useGetMemberInboxQuery({
    fetchPolicy: "no-cache",
  })
  const userInbox = useRef<UserInboxesFragment["userInboxes"] | null>(null)

  const inboxRef = useMemo(() => {
    return doc(firestore, "inbox", auth.user.id || "")
  }, [])

  useEffect(() => {
    return onSnapshot(inboxRef, doc => {
      console.log(doc)
      if (doc.exists()) {
        refetch()
      }
    })
  }, [])

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <>
      <Header
        title="收件夾"
        leftArrow
        redirect={() => {
          if (next) {
            setNext(false)
          } else {
            navigate(-1)
          }
        }}
      />
      {/* inbox第一層 - 諮詢 + 1對1 */}
      <PullToRefresh onRefresh={() => refetch()} refreshingContent={Loading()}>
        <div className={styled["pull-to-refresh-wrapper"]}>
          <div
            className={cx(styled.wrapper, {
              [styled.empty]: (data?.me?.consults?.length || 0) <= 0,
              [styled.hide]: next,
            })}>
            {(data?.me?.consults?.length || 0) <= 0 && <div className={styled.text}>尚無信件</div>}

            {data?.me?.consults?.map(consult => {
              const tmp = consult?.userInboxes?.[0]
              const last = (tmp?.replies && tmp?.replies[tmp?.replies.length - 1]?.content) || ""
              const message = last.includes("https://firebasestorage") ? "圖片" : last

              return (
                <MessageCard
                  key={consult?.id}
                  title={(consult?.oneOnOne ? tmp?.clinic?.name || "" : consult?.subject) || ""}
                  message={consult?.oneOnOne ? message : consult?.content || ""}
                  isOneOnOne={consult?.oneOnOne}
                  unread={
                    consult?.oneOnOne
                      ? (tmp?.readAt || 0) <= 0
                      : consult?.userInboxes?.some(el => !el?.read)
                  }
                  onClick={() => {
                    if (consult?.oneOnOne) {
                      go.toChatroom({ id: tmp?.topicId || "" })
                    } else {
                      setNext(true)
                      userInbox.current = consult?.userInboxes || []
                    }
                  }}
                />
              )
            })}
          </div>
          {/* 諮詢第二層 - 這個諮詢有哪些診所回覆 */}
          <div
            className={cx(styled.wrapper, {
              [styled.empty]: (userInbox.current?.length || 0) <= 0,
              [styled.hide]: !next,
            })}>
            {(userInbox.current?.length || 0) <= 0 && (
              <div className={styled.text}>尚無診所回應</div>
            )}

            {userInbox.current?.map(reply => {
              const message =
                (reply?.replies && reply?.replies[reply?.replies.length - 1]?.content) || ""
              return (
                <MessageCard
                  key={reply?.id}
                  unread={(reply?.readAt || 0) <= 0}
                  title={"來自" + (reply?.clinic?.name || "")}
                  message={message.includes("https://firebasestorage") ? "圖片" : message}
                  onClick={() => {
                    go.toChatroom({ id: reply?.topicId || "" })
                  }}
                />
              )
            })}
          </div>
        </div>
      </PullToRefresh>
    </>
  )
}
export default MemberInbox
