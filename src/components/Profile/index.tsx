import styled from "./Profile.module.scss"
import { ReactComponent as Mail } from "./svg/Mail.svg"
import { ReactComponent as Chat } from "./svg/Chat.svg"

const Profile = () => {
  return (
    <div className={styled.wrapper}>
      <img className={styled.avatar} src="/img/avatar.png" />
      <div className={styled.username}>Wendy</div>
      <div className={styled.hint}>
        <Mail />
        <div>您的信箱尚未認證，</div>
        <div className={styled.enhance}>現在驗證</div>
      </div>
      <div className={styled.chat}>
        <Chat />
      </div>
    </div>
  )
}
export default Profile
