import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import styled from "./ClinicSwitch.module.scss"

const ClinicSwitch = () => {
  return (
    <div className={styled.wrapper}>
      <ButtonGroup
        defaultActiveKey="clinic"
        onSelect={(
          e: React.MouseEvent<Element, MouseEvent>,
          { eventKey }: { eventKey?: ReactProps.EventKey },
        ) => {
          console.info(eventKey)
        }}>
        <Button eventKey="clinic">診所</Button>
        <Button eventKey="introduce">介紹</Button>
        <Button eventKey="team">團隊</Button>
        <Button eventKey="activity">活動</Button>
      </ButtonGroup>
    </div>
  )
}

export default ClinicSwitch
