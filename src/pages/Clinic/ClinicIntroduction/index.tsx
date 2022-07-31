import styled from "./ClinicIntroduction.module.scss"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"

const ClinicIntroduction = () => {
  const {
    query: { data },
  } = useClinicInnerContext()

  if (data?.clinic?.activities?.length === 0)
    return <div className={styled.empty}>相關資訊即將上線</div>

  return data?.clinic?.description ? (
    <div
      className={styled.wrapper}
      dangerouslySetInnerHTML={{ __html: data?.clinic?.description }}
    />
  ) : null
}
export default ClinicIntroduction
