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
          resumes={[
            "采家醫學美容診所院長",
            "AAAMS 美國醫學美容外科協會講師",
            "采家醫學美容診所院長",
          ]}
          expertise={[
            "各種雷射操作、皮秒雷射、微整形操作、音波拉提、埋線拉提、電波拉提、美白針、痘痘針、埋線拉提、電波拉提、美白針、痘痘針",
          ]}
          // TODO: Ask El typescript
          // resumes={doctor?.expertise || []}
          // expertise={doctor?.expertise || []}
        />
      ))}
    </div>
  )
}
export default ClinicMedicalTeam
