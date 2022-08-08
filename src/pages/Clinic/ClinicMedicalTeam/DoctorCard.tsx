import { useState, useRef, useLayoutEffect } from "react"
import styled from "./ClinicMedicalTeam.module.scss"
import cx from "classnames"

export type DoctorCardProps = {
  name?: string
  jobTitle?: string
  photo?: string
  resumes?: string
  expertise?: string
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
      <div
        className={cx(styled.resumes, { [styled.more]: isExperienceMore })}
        dangerouslySetInnerHTML={{ __html: props.resumes || "" }}
      />

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
