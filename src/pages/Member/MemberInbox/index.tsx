import styled from "./MemberInbox.module.scss"
import Header from "components/Layout/Header"
import MessageCard from "components/MessageCard"
import { useGetMemberInboxQuery } from "./MemberInbox.graphql.generated"
import Loading from "components/QueryStatus/Loading"

const MemberInbox = () => {
  const getMemberInbox = useGetMemberInboxQuery()

  if (getMemberInbox.loading) {
    return <Loading />
  }

  const replyInbox = getMemberInbox.data?.me?.replyInbox

  return (
    <>
      <Header title="收件夾" leftArrow />
      <div className={styled.wrapper}>
        {replyInbox?.map(msg => (
          <MessageCard
            key={msg?.id}
            topicId={msg?.topic?.id || ""}
            unread={(msg?.readAt || 0) <= 0}
            title={msg?.topic?.clinic?.name || ""}
            message={msg?.content || ""}
          />
        ))}
      </div>
    </>
  )
}
export default MemberInbox
