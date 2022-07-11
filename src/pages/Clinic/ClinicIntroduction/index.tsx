import styled from "./ClinicIntroduction.module.scss"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"

const ClinicIntroduction = () => {
  const {
    query: { data },
  } = useClinicInnerContext()

  return data?.clinic?.description ? (
    <div
      className={styled.wrapper}
      dangerouslySetInnerHTML={{ __html: data?.clinic?.description }}
    />
  ) : null
}
export default ClinicIntroduction
