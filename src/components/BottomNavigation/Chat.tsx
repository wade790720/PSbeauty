import styled from "./BottomNavigation.module.scss"
import cx from "classnames"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Chat } from "./svg/Chat.svg"
import { ReactComponent as ChatFill } from "./svg/ChatFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"

// eslint-disable-next-line prefer-const
let active = "house"

const BottomNavigation = () => {
  return (
    <div className={cx(styled.wrapper, styled.chat)}>
      <div className={cx(styled.cell, active === "house" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "house" ? <HouseFill /> : <House />}</div>
        <div className={cx(styled.title)}>首頁</div>
      </div>
      <div className={cx(styled.cell, active === "chat" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "chat" ? <ChatFill /> : <Chat />}</div>
        <div className={cx(styled.title)}>諮詢</div>
      </div>
      <div className={cx(styled.cell, active === "person" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "person" ? <PersonFill /> : <Person />}</div>
        <div className={cx(styled.title)}>個人</div>
      </div>
    </div>
  )
}

export default BottomNavigation
