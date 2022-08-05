import styled from "./DoctorInbox.module.scss"
import MessageCard from "components/MessageCard"
import BottomNavigation from "components/BottomNavigation"
import { useGetDoctorInboxQuery } from "./DoctorInbox.graphql.generated"

const DoctorInbox = () => {
  const getDoctorInboxQuery = useGetDoctorInboxQuery()
  const edges = getDoctorInboxQuery?.data?.clinicInbox?.edges

  return (
    <>
      <div className={styled.wrapper}>
        {edges?.map(edge => {
          const key = edge.node?.id || ""
          const reply = edge.node?.reply
          const topic = edge.node?.topic
          const message = reply?.content || topic?.consult?.content || ""
          return (
            <MessageCard
              topicId={topic?.id || ""}
              key={key}
              title={topic?.consult?.subject || ""}
              message={message}
            />
          )
        })}
      </div>
      <BottomNavigation.Chat />
    </>
  )
}
export default DoctorInbox
