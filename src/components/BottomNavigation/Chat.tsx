import styled from "./BottomNavigation.module.scss"
import cx from "classnames"
import { NavLink } from "react-router-dom"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Chat } from "./svg/Chat.svg"
import { ReactComponent as ChatFill } from "./svg/ChatFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"

const BottomNavigation = () => {
  return (
    <div className={cx(styled.wrapper, styled.chat)}>
      <NavLink to="/">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <HouseFill /> : <House />}</div>
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

export default BottomNavigation
