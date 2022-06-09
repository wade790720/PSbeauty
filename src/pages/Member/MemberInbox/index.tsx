import styled from "./MemberInbox.module.scss"
import Header from "components/Layout/Header"
import MessageCard from "components/MessageCard"

const MemberInbox = () => {
  return (
    <>
      <Header title="收件夾" leftArrow />
      <div className={styled.wrapper}>
        <MessageCard
          unread
          title="玉辛醫美診所"
          message="您好，我有「雙眼皮」「痘痘針」「玻尿..."
        />
        <MessageCard unread title="山茼醫美診所" message="好的，謝謝告知。" />
        <MessageCard unread title="和黛醫美診所" message="了解，回診時間再跟您電話聯繫。" />
        <MessageCard title="關楊哲健康醫美診所" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="五代醫美診所" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="健康醫美診所" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="玉辛醫美診所" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="山茼醫美診所" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
      </div>
    </>
  )
}
export default MemberInbox
