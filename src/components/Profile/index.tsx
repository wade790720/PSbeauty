import styled from "./Profile.module.scss"
import Icon from "components/Icon"
import { ReactComponent as Mail } from "./svg/Mail.svg"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"

const Profile = () => {
  const go = useGo()
  const auth = useAuth()

  return (
    <div className={styled.wrapper}>
      <img className={styled.avatar} src="/img/avatar.png" />
      <div className={styled.username}>Wendy</div>
      <div className={styled.hint}>
        <Mail />
        <div>您的信箱尚未認證，</div>
        <div className={styled.enhance}>現在驗證</div>
      </div>
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
