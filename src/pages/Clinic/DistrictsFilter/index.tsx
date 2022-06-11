import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import { useState } from "react"
import styled from "./DistrictsFilter.module.scss"
import districtsData from "./taiwan_districts.json"
import { useForm } from "react-hook-form"
import cx from "classnames"

type DistrictsFilterProps = {
  open: boolean
  onClose: () => void
}

const DistrictsFilter = (props: DistrictsFilterProps) => {
  const [countyEventKey, setCountyEventKey] = useState("臺北市")
  const [isCheckAll, setIsCheckAll] = useState(false)

  const { register, setValue } = useForm<{ dist: string[] }>()

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
                    setValue("dist", [])
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
                setValue(
                  "dist",
                  !isCheckAll
                    ? districtsData
                        .filter(county => {
                          return county.name === countyEventKey
                        })
                        .map(district => {
                          return district.districts.map(item => item.name)
                        })
                        .flat()
                    : [],
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
                    onClick={() => {
                      if (isCheckAll) {
                        setIsCheckAll(false)
                      }
                    }}
                    {...register("dist")}>
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
              setValue("dist", [])
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
