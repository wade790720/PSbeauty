import styled from "./Profile.module.scss"
import Icon from "components/Icon"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"
import { useEffect } from "react"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import Colors from "./colors.json"

const getBackgroundColor = () => {
  const AVATAR_COLOR = "avatar-color"
  let index = parseInt(`${localStorage.getItem(AVATAR_COLOR)}`, 10)
  if (!index) {
    index = Math.round(Math.random() * 1000)
    localStorage.setItem(AVATAR_COLOR, `${index}`)
  }
  return Colors[index % Colors.length]
}

const Profile = () => {
  const go = useGo()
  const auth = useAuth()
  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()
  const backgroundColor = getBackgroundColor()
  const userEmail = auth.user.email || "Unknown"
  const userName = auth.user.name || "未命名"
  const consults = getMemberInboxQuery.data?.me?.consults || []

  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  return (
    <div className={styled.wrapper}>
      <div className={styled.avatar} style={{ background: backgroundColor }}>
        {userEmail[0].toUpperCase()}
      </div>
      <div className={styled.username}>{userName}</div>

      {!auth.user.clinic && (
        <div
          className={styled.chat}
          onClick={() => {
            auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
          }}>
          <Icon name="Chat" />
          {consults.length > 1 &&
            consults?.map(consult => consult?.userInboxes?.some(el => !el?.read)) && (
              <div className={styled["chat-unread"]} />
            )}
        </div>
      )}
    </div>
  )
}
export default Profile
