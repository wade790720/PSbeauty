import { useState, useRef, useLayoutEffect } from "react"
import styled from "./ClinicMedicalTeam.module.scss"
import cx from "classnames"

export type DoctorCardProps = {
  name?: string
  jobTitle?: string
  photo?: string
  // TODO: 2個欄位待確認型別
  resumes?: string[]
  expertise?: string[]
}

const DoctorCard = ({ ...props }: DoctorCardProps) => {
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
        <img className={styled.avatar} src={props?.photo} />
        <div className={styled.information}>
          <div className={styled.name}>{props?.name}</div>
          <div className={styled["job-title"]}>{props?.jobTitle}</div>
        </div>
      </div>
      <ul
        className={cx(styled.resumes, {
          [styled.more]: isExperienceMore,
        })}>
        {props?.resumes?.map((item, idx) => (
          <li className={styled.job} key={`${item}-${idx}`}>
            {item}
          </li>
        ))}
      </ul>
      {props?.resumes && props?.resumes.length > 2 && (
        <div className={styled.show} onClick={() => setIsExperienceMore(!isExperienceMore)}>
          {isExperienceMore ? "顯示更少" : "顯示更多"}
        </div>
      )}
      <div className={cx(styled.expertise, { [styled.more]: isExpertiseMore })} ref={ref}>
        {props?.expertise}
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
