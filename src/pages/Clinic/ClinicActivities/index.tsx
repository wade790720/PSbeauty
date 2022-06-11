import styled from "./ClinicActivities.module.scss"
import ActivityCard from "./ActivityCard"

const ClinicActivities = () => {
  return (
    <div className={styled.wrapper}>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </div>
  )
}
export default ClinicActivities
