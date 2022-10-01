import { useMatch, Navigate } from "react-router-dom"
import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import useGo from "components/Router/useGo"
import styled from "./ClinicSwitch.module.scss"

const DEFAULT_TAB = "info"

const ClinicSwitch = () => {
  const go = useGo()
  const match = useMatch("/clinic/:id/inner/:tab")

  if (!match?.params.tab) return <Navigate to={DEFAULT_TAB} replace />
  return (
    <div className={styled.wrapper}>
      <ButtonGroup
        defaultActiveKey={match?.params.tab || DEFAULT_TAB}
        onSelect={(_, { eventKey }) => {
          go.toClinicInner({ id: match.params.id || "", tab: `${eventKey}` }, { replace: true })
        }}>
        <Button eventKey="info">診所</Button>
        <Button eventKey="introduction">介紹</Button>
        <Button eventKey="medical-team">團隊</Button>
        <Button eventKey="activities">活動</Button>
      </ButtonGroup>
    </div>
  )
}

export default ClinicSwitch
