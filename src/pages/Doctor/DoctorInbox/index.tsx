import MessageCard from "containers/MessageCard"
import Toolbars from "containers/Toolbars"
import { doc, onSnapshot } from "firebase/firestore"
import { useAuth } from "hooks/useAuth"
import { useEffect, useMemo, useRef } from "react"
import { useGetDoctorInboxQuery, useReadClinicInboxMutation } from "./DoctorInbox.graphql.generated"
import styled from "./DoctorInbox.module.scss"
import { firestore } from "../../../firebaseClient"

const DoctorInbox = () => {
  const auth = useAuth()
  const getDoctorInboxQuery = useGetDoctorInboxQuery({
    fetchPolicy: "no-cache",
  })
  const edges = getDoctorInboxQuery?.data?.clinicInbox?.edges || []
  const hasNextPage = getDoctorInboxQuery.data?.clinicInbox?.pageInfo.hasNextPage ?? false
  const cursorRef = useRef<string>("")

  const [readInbox] = useReadClinicInboxMutation()

  const inboxRef = useMemo(() => {
    return doc(firestore, "inbox", auth.user.id || "")
  }, [])

  useEffect(() => {
    return onSnapshot(inboxRef, doc => {
      if (doc.exists()) {
        getDoctorInboxQuery.refetch()
      }
    })
  }, [])

  const fetchMore = () => {
    const after = edges?.[edges.length - 1]?.cursor || null

    getDoctorInboxQuery.fetchMore({
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
    getDoctorInboxQuery.refetch()
  }

  return (
    <>
      <div className={styled.wrapper}>
        {edges?.map((edge, idx) => {
          const key = edge.node?.id || ""
          const reply = edge.node?.topic?.replies
          const topic = edge.node?.topic
          const unread = edge.node?.readAt === 0

          const repliesCount = reply?.length || 0
          const message = reply?.[repliesCount - 1]?.content || topic?.consult?.content || ""
          if (!message && repliesCount <= 0) {
            return null
          }
          return (
            <MessageCard
              unread={unread}
              topicId={topic?.id || ""}
              key={key}
              title={topic?.consult?.subject || "來自會員的一對一諮詢"}
              message={message}
              last={edges.length - 1 === idx}
              fetchMore={() => {
                hasNextPage && fetchMore()
              }}
              click={() => readClinicInbox(key)}
            />
          )
        })}
      </div>
      <Toolbars.Clinic />
    </>
  )
}
export default DoctorInbox
