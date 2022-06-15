import { useState } from "react"
import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import styled from "./SubjectFilter.module.scss"
import { useForm } from "react-hook-form"
import cx from "classnames"

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: string) => void
}

const fakePartData = ["眼睛", "臉頰", "鼻子", "嘴唇", "下巴", "額頭", "顴骨"]

const fakeSubjectData = [
  "臉部拉提",
  "音波拉提",
  "平滑臉部與前額",
  "玻尿酸注射",
  "痘痘針",
  "美白粉刺",
  "皮秒雷射",
  "埋線拉提",
  "電波拉提",
  "肉毒桿菌注射",
  "脂肪填充",
]

const SubjectFilter = (props: consultProps) => {
  const [eventKey, setEventKey] = useState("眼睛")
  const [isCheckAll, setIsCheckAll] = useState(false)
  const { register, setValue, watch } = useForm<{ subject: string[] }>()
  const chosenSubject = watch().subject || []

  return (
    <Drawer open={props.open} onClose={props.onClose} size="100%">
      <div className={styled.wrapper}>
        <div className={styled.title}>分類(56)</div>
        <div className={styled["medical-type"]}>
          <Button variant="text">整形手術</Button>
          <Button variant="text">整形手術</Button>
          <Button variant="text">整形手術</Button>
          <Button variant="text">整形手術</Button>
          <Button variant="text">整形手術</Button>
        </div>
        <div className={styled.content}>
          <div className={styled.part}>
            {fakePartData.map(item => {
              return (
                <button
                  key={item}
                  onClick={() => {
                    setEventKey(item)
                    setValue("subject", [])
                    setIsCheckAll(false)
                  }}
                  className={cx(styled.item, { [styled.select]: item === eventKey })}>
                  {item}
                </button>
              )
            })}
          </div>
          <div className={styled.subjects}>
            <Form.Checkbox
              className={styled.item}
              checked={isCheckAll}
              onClick={() => {
                setIsCheckAll(!isCheckAll)
                setValue("subject", !isCheckAll ? fakeSubjectData.map(subject => subject) : [])
              }}>
              全選
            </Form.Checkbox>
            {fakeSubjectData.map(subject => (
              <Form.Checkbox
                key={subject}
                className={styled.item}
                value={subject}
                onClick={() => {
                  if (isCheckAll) {
                    setIsCheckAll(false)
                  }
                }}
                {...register("subject")}>
                {subject}
              </Form.Checkbox>
            ))}
          </div>
        </div>
      </div>
      <div className={styled.buttons}>
        <Button
          variant="text"
          onClick={() => {
            setValue("subject", [])
            setIsCheckAll(false)
          }}>
          清除
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.getValue(chosenSubject.toString())
            props.onClose()
          }}>
          完成
        </Button>
      </div>
    </Drawer>
  )
}

export default SubjectFilter
