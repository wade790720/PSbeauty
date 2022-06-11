import styled from "./ClinicMedicalTeam.module.scss"
import DoctorCard from "./DoctorCard"

const ClinicMedicalTeam = () => {
  return (
    <div className={styled.wrapper}>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </div>
  )
}
export default ClinicMedicalTeam
