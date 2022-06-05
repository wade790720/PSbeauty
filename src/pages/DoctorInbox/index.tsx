import styled from "./DoctorInbox.module.scss"
import MessageCard from "components/MessageCard"
import BottomNavigation from "components/BottomNavigation"

const DoctorInbox = () => {
  return (
    <>
      <div className={styled.wrapper}>
        <MessageCard unread title="A0086" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard unread title="A0012" message="好的，謝謝告知。" />
        <MessageCard unread title="A0032" message="了解，回診時間再跟您電話聯繫。" />
        <MessageCard title="A0021" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="A0050" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="A0086" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="A0034" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
        <MessageCard title="A0086" message="您好，我有「雙眼皮」「痘痘針」「玻尿..." />
      </div>
      <BottomNavigation.Chat />
    </>
  )
}
export default DoctorInbox
