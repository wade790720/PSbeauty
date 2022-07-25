import styled from "./ClinicMedicalTeam.module.scss"
import DoctorCard from "./DoctorCard"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"

const ClinicMedicalTeam = () => {
  const {
    query: { data },
  } = useClinicInnerContext()

  return (
    <div className={styled.wrapper}>
      {data?.clinic?.doctors?.map(doctor => (
        <DoctorCard
          key={doctor?.id}
          name={doctor?.name || ""}
          jobTitle={doctor?.title || ""}
          photo={doctor?.photo || ""}
          resumes={doctor?.resumes || ""}
          expertise={doctor?.expertise || ""}
        />
      ))}
    </div>
  )
}
export default ClinicMedicalTeam
