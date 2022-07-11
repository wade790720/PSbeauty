import styled from "./Clinic.module.scss"
import useGo from "components/Router/useGo"

export type ClinicCardProps = {
  id: string
  name: string
  county: string
  town: string
  caseCount: number
  consultReplyCount: number
}

const ClinicCard = ({ ...props }: ClinicCardProps) => {
  const go = useGo()
  return (
    <div className={styled.clinic} onClick={() => go.toClinicInner({ id: props.id, tab: "" })}>
      <div className={styled.title}>{props.name}</div>
      <div className={styled["sub-title"]}>
        {props.county}
        {props.town}
      </div>
      <div className={styled.content}>
        <div className={styled.case}>
          <div className={styled.block} />
          案例數 <span>{props.caseCount}</span>
        </div>
        <div className={styled.reply}>
          <div className={styled.block} />
          回覆數 <span>{props.consultReplyCount}</span>
        </div>
      </div>
    </div>
  )
}

export default ClinicCard
