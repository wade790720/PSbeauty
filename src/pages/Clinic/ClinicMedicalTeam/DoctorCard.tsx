import { useState, useRef, useLayoutEffect } from "react"
import styled from "./ClinicMedicalTeam.module.scss"
import cx from "classnames"

const data = {
  name: "陳家衛",
  jobTitle: "院長",
  experience: ["采家醫學美容診所院長", "AAAMS 美國醫學美容外科協會講師", "采家醫學美容診所院長"],
  expertise:
    "各種雷射操作、皮秒雷射、微整形操作、音波拉提、埋線拉提、電波拉提、美白針、痘痘針、埋線拉提、電波拉提、美白針、痘痘針",
}

const DoctorCard = () => {
  const [isExperienceMore, setIsExperienceMore] = useState(false)
  const [isExpertiseMore, setIsExpertiseMore] = useState(false)
  const [over, setOver] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const clientHeight = ref.current?.clientHeight || 0
    const scrollHeight = ref.current?.scrollHeight || 0
    if (clientHeight && scrollHeight > clientHeight) {
      setOver(true)
    }
  }, [])

  return (
    <div className={styled.doctor}>
      <div className={styled.personal}>
        <div className={styled.avatar} />
        <div className={styled.information}>
          <div className={styled.name}>{data.name}</div>
          <div className={styled["job-title"]}>{data.jobTitle}</div>
        </div>
      </div>
      <ul
        className={cx(styled.experience, {
          [styled.more]: isExperienceMore,
        })}>
        {data.experience.map(item => (
          <li className={styled.job} key={item}>
            {item}
          </li>
        ))}
      </ul>
      {data.experience.length > 2 && (
        <div className={styled.show} onClick={() => setIsExperienceMore(!isExperienceMore)}>
          {isExperienceMore ? "顯示更少" : "顯示更多"}
        </div>
      )}
      <div className={cx(styled.expertise, { [styled.more]: isExpertiseMore })} ref={ref}>
        {data.expertise}
      </div>
      {over && (
        <div className={styled.show} onClick={() => setIsExpertiseMore(!isExpertiseMore)}>
          {isExpertiseMore ? "顯示更少" : "顯示更多"}
        </div>
      )}
    </div>
  )
}

export default DoctorCard
