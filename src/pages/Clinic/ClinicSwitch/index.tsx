import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import styled from "./ClinicSwitch.module.scss"
import useGo from "components/Router/useGo"

const ClinicSwitch = () => {
  const go = useGo()

  return (
    <div className={styled.wrapper}>
      <ButtonGroup
        defaultActiveKey="clinic"
        onSelect={(
          e: React.MouseEvent<Element, MouseEvent>,
          { eventKey }: { eventKey?: ReactProps.EventKey },
        ) => {
          if (eventKey === "clinic") {
            go.toClinicInner({ id: "123", tab: "" })
          } else {
            go.toClinicInner({ id: "123", tab: eventKey + "" })
          }
        }}>
        <Button eventKey="clinic">診所</Button>
        <Button eventKey="introduction">介紹</Button>
        <Button eventKey="medical-team">團隊</Button>
        <Button eventKey="activities">活動</Button>
      </ButtonGroup>
    </div>
  )
}

export default ClinicSwitch
