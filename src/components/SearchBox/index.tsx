import styled from "./SearchBox.module.scss"
import { ReactComponent as Search } from "./svg/Search.svg"
import { ReactComponent as Cross } from "./svg/Cross.svg"

const Profile = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.input}>
        <Search />
        <input />
        <Cross />
      </div>
      <div className={styled.submit}>送出</div>
    </div>
  )
}
export default Profile
