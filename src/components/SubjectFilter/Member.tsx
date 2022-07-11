import { useState, useEffect } from "react"
import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import styled from "./SubjectFilter.module.scss"
import { useForm } from "react-hook-form"
import cx from "classnames"
import Icon from "components/Icon"
import { GetTopCategoriesQueryHookResult } from "pages/Home/Consulting/Consulting.graphql.generated"

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: string) => void
  topCategories?: string[]
  query: GetTopCategoriesQueryHookResult
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

type CategoryType = {
  top?: string
  second?: string
}

const SubjectFilter = (props: consultProps) => {
  const [category, setCategory] = useState<CategoryType>()
  const [errorState, setErrorState] = useState(false)
  const { register, setValue, watch } = useForm<{ subject: string[] }>()
  const chosenSubject = watch().subject || []
  const registerSubject = register("subject")
  const topCategories = props?.query?.data?.topCategories

  useEffect(() => {
    if (topCategories && topCategories?.length > 0 && !category?.top) {
      setCategory({
        top: topCategories[0]?.name || "",
        second:
          (topCategories[0]?.secondCategories && topCategories[0]?.secondCategories[0]?.name) || "",
      })
    }
  }, [topCategories])

  return (
    <Drawer open={props.open} onClose={props.onClose} size="100%">
      <div className={styled.wrapper}>
        <div className={styled.title}>
          分類({chosenSubject?.length}/3)
          {errorState && (
            <div className={styled.error}>
              <Icon name="info" />
              <p>最多選擇3項</p>
            </div>
          )}
        </div>
        <div className={styled["medical-type"]}>
          {props.topCategories?.map((item, idx) => (
            <Button
              variant="text"
              key={`topCategories-${idx}`}
              className={cx({ [styled.category]: item === category?.top })}>
              {item}
            </Button>
          ))}
        </div>
        <div className={styled.content}>
          <div className={styled.part}>
            {topCategories
              ?.find(el => el?.name === category?.top)
              ?.secondCategories?.map((item, idx) => {
                return (
                  <button
                    key={`secondCategories-${idx}`}
                    onClick={() => {
                      setCategory({
                        ...category,
                        second: item?.name || "",
                      })
                      setValue("subject", [])
                    }}
                    className={cx(styled.item, {
                      [styled.select]: item?.name === category?.second,
                    })}>
                    {item?.name || ""}
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
                {...register("subject")}
                onChange={e => {
                  if (e.target.checked && chosenSubject.length === 3) {
                    e.target.checked = false
                    setErrorState(true)
                  } else {
                    setErrorState(false)
                  }
                  registerSubject.onChange(e)
                }}>
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
            setErrorState(false)
          }}>
          清除
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.getValue(chosenSubject.toString())
            props.onClose()
            setErrorState(false)
          }}>
          完成
        </Button>
      </div>
    </Drawer>
  )
}

export default SubjectFilter
