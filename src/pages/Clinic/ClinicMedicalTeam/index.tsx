import styled from "./ClinicMedicalTeam.module.scss"
import DoctorCard from "./DoctorCard"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"

const ClinicMedicalTeam = () => {
  const {
    query: { data },
  } = useClinicInnerContext()

  if (data?.clinic?.activities?.length === 0)
    return <div className={styled.empty}>相關資訊即將上線</div>

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
