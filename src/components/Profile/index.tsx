import styled from "./Profile.module.scss"
import Icon from "components/Icon"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"
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
  const backgroundColor = getBackgroundColor()
  const userEmail = auth.user.email || "Unknown"
  const userName = auth.user.name || "未命名"

  return (
    <div className={styled.wrapper}>
      {/* <img className={styled.avatar} src="/img/avatar.png" /> */}
      <div className={styled.avatar} style={{ background: backgroundColor }}>
        {userEmail[0].toUpperCase()}
      </div>
      <div className={styled.username}>{userName}</div>
      {/* <div className={styled.hint}>
        <Mail />
        <div>您的信箱尚未認證，</div>
        <div className={styled.enhance}>現在驗證</div>
      </div> */}
      <div
        className={styled.chat}
        onClick={() => {
          auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
        }}>
        <Icon name="Chat" />
      </div>
    </div>
  )
}
export default Profile
