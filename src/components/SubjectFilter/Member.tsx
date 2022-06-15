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
  const { register, setValue, watch } = useForm<{ subject: string[] }>()
  const chosenSubject = watch().subject || []

  register("subject", {
    onChange: e => {
      if (chosenSubject.length >= 3) {
        e.target.checked = false
        chosenSubject.pop()
      }
    },
  })

  const subjectLength = chosenSubject ? (chosenSubject?.length < 4 ? chosenSubject.length : 3) : 0

  return (
    <Drawer open={props.open} onClose={props.onClose} size="100%">
      <div className={styled.wrapper}>
        <div className={styled.title}>分類({subjectLength}/3)</div>
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
                    // setChosenSubject([])
                  }}
                  className={cx(styled.item, { [styled.select]: item === eventKey })}>
                  {item}
                </button>
              )
            })}
          </div>
          <div className={styled.subjects}>
            {fakeSubjectData.map(subject => (
              <Form.Checkbox
                key={subject}
                className={cx("checkbox", styled.item)}
                value={subject}
                {...register("subject")}>
                {subject}
              </Form.Checkbox>
            ))}
          </div>
        </div>
        <div className={styled.buttons}>
          <Button
            variant="text"
            onClick={() => {
              setValue("subject", [])
            }}>
            清除
          </Button>
          <Button
            variant="text"
            onClick={() => {
              // have to be fix
              if (chosenSubject.length > 3) {
                chosenSubject.pop()
              }
              props.getValue(chosenSubject.toString())
              props.onClose()
            }}>
            完成
          </Button>
        </div>
      </div>
    </Drawer>
  )
}

export default SubjectFilter
