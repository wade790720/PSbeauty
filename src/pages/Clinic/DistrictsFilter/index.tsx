import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import { useState } from "react"
import styled from "./DistrictsFilter.module.scss"
import districtsData from "./taiwan_districts.json"
import cx from "classnames"

type DistrictsFilterProps = {
  open: boolean
  onClose: () => void
}

type RegionProps = {
  county: string
  town: string
}[]

const DistrictsFilter = (props: DistrictsFilterProps) => {
  const [countyEventKey, setCountyEventKey] = useState("臺北市")
  const [region, setRegion] = useState<RegionProps>()
  const [isCheckAll, setIsCheckAll] = useState(false)

  return (
    <Drawer open={props.open} onClose={props.onClose} size="516px">
      <div className={styled.wrapper}>
        <div className={styled.title}>地區篩選</div>
        <div className={styled.content}>
          <div className={styled.city}>
            {districtsData.map(item => {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setCountyEventKey(item.name)
                    // setValue("dist", [])
                    setIsCheckAll(false)
                  }}
                  className={cx(styled.item, { [styled.select]: item.name === countyEventKey })}>
                  {item.name}
                </button>
              )
            })}
          </div>
          <div className={styled.dist}>
            <Form.Checkbox
              className={styled.item}
              checked={isCheckAll}
              onChange={() => setIsCheckAll(!isCheckAll)}
              onClick={() => {
                if (isCheckAll) {
                  setRegion([])
                  return
                }
                const target = districtsData
                  .find(county => county.name === countyEventKey)
                  ?.districts.map(el => ({
                    county: countyEventKey,
                    town: el.name,
                  }))
                setRegion(target)
              }}>
              全選
            </Form.Checkbox>
            {districtsData
              .filter(county => {
                return county.name === countyEventKey
              })
              .map(district => {
                return district.districts.map(item => (
                  <Form.Checkbox
                    key={item.zip}
                    className={styled.item}
                    value={item.name}
                    checked={region?.some(
                      el => el.county === countyEventKey && el.town === item.name,
                    )}
                    onChange={e => {
                      if (isCheckAll) {
                        setIsCheckAll(false)
                      }

                      if (e.target.checked) {
                        region
                          ? setRegion([...region, { county: countyEventKey, town: item.name }])
                          : setRegion([{ county: countyEventKey, town: item.name }])
                      } else {
                        region &&
                          region.splice(
                            region.findIndex(el => el.town === item.name),
                            1,
                          )
                        setRegion(region)
                      }
                    }}>
                    {item.name}
                  </Form.Checkbox>
                ))
              })}
          </div>
        </div>
        <div className={styled.buttons}>
          <Button
            variant="text"
            onClick={() => {
              setRegion([])
              setIsCheckAll(false)
            }}>
            清除
          </Button>
          <Button onClick={props.onClose}>完成</Button>
        </div>
      </div>
    </Drawer>
  )
}

export default DistrictsFilter
