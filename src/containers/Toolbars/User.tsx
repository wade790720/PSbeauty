import styled from "./Toolbars.module.scss"
import cx from "classnames"
import { NavLink } from "react-router-dom"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Clinic } from "./svg/Clinic.svg"
import { ReactComponent as ClinicFill } from "./svg/ClinicFill.svg"
import { ReactComponent as Gift } from "./svg/Gift.svg"
import { ReactComponent as GiftFill } from "./svg/GiftFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"
import { ReactComponent as Search } from "./svg/Search.svg"
import { ReactComponent as SearchFill } from "./svg/SearchFill.svg"

const ToolbarsByUser = () => {
  return (
    <div className={styled.wrapper}>
      <NavLink to="/">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <HouseFill /> : <House />}</div>
            <div className={styled.title}>首頁</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/clinic">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <ClinicFill /> : <Clinic />}</div>
            <div className={styled.title}>診所</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/searchAll">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <SearchFill /> : <Search />}</div>
            <div className={styled.title}>探索</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/activities">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <GiftFill /> : <Gift />}</div>
            <div className={styled.title}>活動</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/member">
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

export default ToolbarsByUser
