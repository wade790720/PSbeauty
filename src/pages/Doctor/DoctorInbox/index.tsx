import Header from "components/Layout/Header"
import MessageCard from "containers/MessageCard"
import Toolbars from "containers/Toolbars"
import { doc, onSnapshot } from "firebase/firestore"
import { useAuth } from "hooks/useAuth"
import { useEffect, useMemo, useRef } from "react"
import { useGetDoctorInboxQuery, useReadClinicInboxMutation } from "./DoctorInbox.graphql.generated"
import styled from "./DoctorInbox.module.scss"
import { firestore } from "../../../firebaseClient"
import { useGo } from "components/Router"
import QueryStatus from "components/QueryStatus"

const DoctorInbox = () => {
  const go = useGo()
  const auth = useAuth()
  const { data, loading, error, refetch, fetchMore } = useGetDoctorInboxQuery({
    fetchPolicy: "no-cache",
  })
  const edges = data?.clinicInbox?.edges || []
  const hasNextPage = data?.clinicInbox?.pageInfo.hasNextPage ?? false
  const cursorRef = useRef<string>("")

  const [readInbox] = useReadClinicInboxMutation()

  const inboxRef = useMemo(() => {
    return doc(firestore, "inbox", auth.user.id || "")
  }, [])

  useEffect(() => {
    return onSnapshot(inboxRef, doc => {
      if (doc.exists()) {
        refetch()
      }
    })
  }, [])

  const handleFetchMore = () => {
    const after = edges?.[edges.length - 1]?.cursor || null

    fetchMore({
      variables: {
        input: after,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (
          !after ||
          after === cursorRef?.current ||
          !fetchMoreResult?.clinicInbox?.edges ||
          !prevResult?.clinicInbox?.edges ||
          prevResult?.clinicInbox?.edges.length > edges.length
        )
          return prevResult

        fetchMoreResult.clinicInbox.edges = [
          ...(prevResult?.clinicInbox?.edges || []),
          ...(fetchMoreResult?.clinicInbox?.edges || []),
        ]

        cursorRef.current = after
        return fetchMoreResult
      },
    })
  }

  const readClinicInbox = (id: string) => {
    console.log(`read: ${id}`)
    readInbox({
      variables: {
        input: {
          clinicInboxId: id,
        },
      },
    })
    refetch()
  }

  if (loading) return <QueryStatus.Loading />
  if (error) return <QueryStatus.Error />

  return (
    <>
      <Header leftArrow title="收件夾" />
      <div className={styled.wrapper}>
        {edges.length ? (
          edges?.map((edge, idx) => {
            const key = edge.node?.id || ""
            const reply = edge.node?.topic?.replies
            const topic = edge.node?.topic
            const unread = edge.node?.readAt === 0

            const repliesCount = reply?.length || 0
            const last = reply?.[repliesCount - 1]?.content || topic?.consult?.content || ""
            const message = last.includes("https://firebasestorage") ? "圖片" : last

            if (repliesCount === 0 && topic?.consult?.content === "OneOnOne") {
              return null
            }
            return (
              <MessageCard
                unread={unread}
                key={key}
                title={topic?.consult?.subject || "來自會員的一對一諮詢"}
                message={message}
                last={edges.length - 1 === idx}
                fetchMore={() => {
                  hasNextPage && handleFetchMore()
                }}
                onClick={() => {
                  readClinicInbox(key)
                  go.toChatroom({ id: topic?.id || "" })
                }}
              />
            )
          })
        ) : (
          <div className={styled.hint}>尚未有任何信件</div>
        )}
      </div>
      <Toolbars.Clinic />
    </>
  )
}
export default DoctorInbox
