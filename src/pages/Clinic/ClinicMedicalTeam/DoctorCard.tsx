import { useState } from "react"
import styled from "./ClinicMedicalTeam.module.scss"
import cx from "classnames"

const DoctorCard = () => {
  const [isExperienceMore, setIsExperienceMore] = useState(false)
  const [isExpertiseMore, setIsExpertiseMore] = useState(false)
  return (
    <div className={styled.doctor}>
      <div className={styled.personal}>
        <div className={styled.avatar} />
        <div className={styled.information}>
          <div className={styled.name}>陳家衛</div>
          <div className={styled["job-title"]}>院長</div>
        </div>
      </div>
      <ul className={cx(styled.experience, { [styled.more]: isExperienceMore })}>
        <li className={styled.job}>采家醫學美容診所院長</li>
        <li className={styled.job}>AAAMS 美國醫學美容外科協會講師</li>
        <li className={styled.job}>AAAMS 美國醫學美容外科協會講師</li>
      </ul>
      <div className={styled.show} onClick={() => setIsExperienceMore(!isExperienceMore)}>
        {isExperienceMore ? "顯示更少" : "顯示更多"}
      </div>
      <div className={cx(styled.expertise, { [styled.more]: isExpertiseMore })}>
        各種雷射操作、皮秒雷射、微整形操作、音波拉提、埋線拉提、電波拉提、美白針、痘痘針
      </div>
      <div className={styled.show} onClick={() => setIsExpertiseMore(!isExpertiseMore)}>
        {isExpertiseMore ? "顯示更少" : "顯示更多"}
      </div>
    </div>
  )
}

export default DoctorCard
