import styled from "./BottomNavigation.module.scss"
import cx from "classnames"
import { NavLink } from "react-router-dom"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Clinic } from "./svg/Clinic.svg"
import { ReactComponent as ClinicFill } from "./svg/ClinicFill.svg"
import { ReactComponent as Case } from "./svg/Case.svg"
import { ReactComponent as CaseFill } from "./svg/CaseFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"

const BottomNavigation = () => {
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
      <NavLink to="/clinical-case-list">
        {({ isActive }) => (
          <div className={cx(styled.cell, { [styled.active]: isActive })}>
            <div className={styled.icon}>{isActive ? <CaseFill /> : <Case />}</div>
            <div className={styled.title}>案例</div>
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

export default BottomNavigation
