import styled from "./Toolbars.module.scss"
import cx from "classnames"
import { NavLink } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import { useLocation } from "react-router-dom"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Chat } from "./svg/Chat.svg"
import { ReactComponent as ChatFill } from "./svg/ChatFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"

const ToolbarsByClinic = () => {
  const auth = useAuth()
  const location = useLocation()

  return (
    <div className={cx(styled.wrapper, styled.chat)}>
      <NavLink to={`/clinic/${auth?.user?.clinic}/inner/info`}>
        {({ isActive }) => (
          <div
            className={cx(styled.cell, {
              [styled.active]: isActive || location?.pathname.includes("/inner/"),
            })}>
            <div className={styled.icon}>
              {isActive || location?.pathname.includes("/inner/") ? <HouseFill /> : <House />}
            </div>
            <div className={styled.title}>首頁</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/doctor/inbox">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <ChatFill /> : <Chat />}</div>
            <div className={styled.title}>諮詢</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/doctor" end>
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <PersonFill /> : <Person />}</div>
            <div className={styled.title}>個人</div>
          </div>
        )}
      </NavLink>
    </div>
  )
}

export default ToolbarsByClinic
