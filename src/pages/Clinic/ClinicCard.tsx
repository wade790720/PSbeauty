import styled from "./Clinic.module.scss"

const ClinicCard = () => {
  return (
    <div className={styled.clinic}>
      <div className={styled.title}>玉辛醫美診所</div>
      <div className={styled["sub-title"]}>台北市大安區</div>
      <div className={styled.content}>
        <div className={styled.case}>
          <div className={styled.block} />
          案例數 <span>100.2K</span>
        </div>
        <div className={styled.reply}>
          <div className={styled.block} />
          回覆數 <span>100.2K</span>
        </div>
      </div>
    </div>
  )
}

export default ClinicCard
