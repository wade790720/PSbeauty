import styled from "./BottomNavigation.module.scss"
import cx from "classnames"

import { ReactComponent as House } from "./svg/House.svg"
import { ReactComponent as HouseFill } from "./svg/HouseFill.svg"
import { ReactComponent as Clinic } from "./svg/Clinic.svg"
import { ReactComponent as ClinicFill } from "./svg/ClinicFill.svg"
import { ReactComponent as Case } from "./svg/Case.svg"
import { ReactComponent as CaseFill } from "./svg/CaseFill.svg"
import { ReactComponent as Person } from "./svg/Person.svg"
import { ReactComponent as PersonFill } from "./svg/PersonFill.svg"

// eslint-disable-next-line prefer-const
let active = "house"

const BottomNavigation = () => {
  return (
    <div className={cx(styled.wrapper)}>
      <div className={cx(styled.cell, active === "house" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "house" ? <HouseFill /> : <House />}</div>
        <div className={cx(styled.title)}>首頁</div>
      </div>
      <div className={cx(styled.cell, active === "clinic" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "clinic" ? <ClinicFill /> : <Clinic />}</div>
        <div className={cx(styled.title)}>診所</div>
      </div>
      <div className={cx(styled.cell, active === "case" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "case" ? <CaseFill /> : <Case />}</div>
        <div className={cx(styled.title)}>案例</div>
      </div>
      <div className={cx(styled.cell, active === "person" && styled.active)}>
        <div className={cx(styled.icon)}>{active === "person" ? <PersonFill /> : <Person />}</div>
        <div className={cx(styled.title)}>個人</div>
      </div>
    </div>
  )
}

export default BottomNavigation
