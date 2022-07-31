import styled from "./ClinicActivities.module.scss"
import ActivityCard from "./ActivityCard"
import { useClinicInnerContext } from "pages/Clinic/ClinicInnerWrapper"

const ClinicActivities = () => {
  const {
    query: { data },
  } = useClinicInnerContext()

  if (data?.clinic?.activities?.length === 0)
    return <div className={styled.empty}>相關資訊即將上線</div>
  return (
    <div className={styled.wrapper}>
      {data?.clinic?.activities?.map(activity => (
        <ActivityCard
          key={activity?.id}
          activityId={activity?.id || ""}
          subject={activity?.subject || ""}
          content={activity?.content || ""}
          image={activity?.image || ""}
        />
      ))}
    </div>
  )
}
export default ClinicActivities
