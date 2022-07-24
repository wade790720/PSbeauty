import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import { useState } from "react"
import styled from "./DistrictsFilter.module.scss"
import districtsData from "./taiwan_districts.json"
import cx from "classnames"

type DistrictsFilterProps = {
  open: boolean
  onClose: (value: RegionProps) => void
}

type RegionProps = {
  county: string
  town: string
}[]

const DistrictsFilter = (props: DistrictsFilterProps) => {
  const [countyEventKey, setCountyEventKey] = useState("臺北市")
  const [region, setRegion] = useState<RegionProps>([])
  const [isCheckAll, setIsCheckAll] = useState<string[]>([])

  return (
    <Drawer
      open={props.open}
      onClose={() => {
        props.onClose([])
      }}
      size="516px">
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
              checked={isCheckAll?.some(el => el === countyEventKey)}
              onChange={() => {
                if (isCheckAll?.some(el => el === countyEventKey))
                  setIsCheckAll(isCheckAll.filter(el => el !== countyEventKey))
                else setIsCheckAll([...isCheckAll, countyEventKey])
              }}
              onClick={() => {
                const target =
                  districtsData
                    .find(county => county.name === countyEventKey)
                    ?.districts.map(el => ({
                      county: countyEventKey,
                      town: el.name,
                    })) || []

                if (isCheckAll?.some(el => el === countyEventKey)) {
                  setRegion(
                    region.filter(item => {
                      return (
                        target.findIndex(
                          el => el.town === item.town && el.county === item.county,
                        ) === -1
                      )
                    }),
                  )

                  return
                }

                const sum = [...region, ...target]
                setRegion(
                  sum.filter(
                    (el, i) =>
                      sum.findIndex(s => el.county === s.county && el.town === s.town) === i,
                  ),
                )
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
                      if (isCheckAll?.some(el => el === countyEventKey))
                        setIsCheckAll([...isCheckAll, countyEventKey])

                      if (e.target.checked) {
                        region
                          ? setRegion([...region, { county: countyEventKey, town: item.name }])
                          : setRegion([{ county: countyEventKey, town: item.name }])

                        const target = district.districts?.map(el => ({
                          town: el?.name,
                          county: countyEventKey,
                        }))
                        const outside = [
                          ...region.map(el => ({ town: el.town, county: el.county })),
                          { county: countyEventKey, town: item.name },
                        ]

                        if (
                          outside.filter(
                            el =>
                              target.findIndex(
                                item => el.town === item.town && el.county === item.county,
                              ) >= 0,
                          ).length === target.length
                        )
                          setIsCheckAll([...isCheckAll, countyEventKey])
                      } else {
                        const target = region.filter(el =>
                          el.town === item.name && el.county === countyEventKey ? false : true,
                        )
                        setRegion(target)
                        setIsCheckAll(isCheckAll.filter(el => el !== countyEventKey))
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
              setIsCheckAll([])
            }}>
            清除
          </Button>
          <Button
            onClick={() => {
              props.onClose(region)
            }}>
            完成
          </Button>
        </div>
      </div>
    </Drawer>
  )
}

export default DistrictsFilter
