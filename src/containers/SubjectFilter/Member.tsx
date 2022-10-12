import { useState, useEffect } from "react"
import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import styled from "./SubjectFilter.module.scss"
import cx from "classnames"
import Icon from "components/Icon"
import { GetTopCategoriesQueryHookResult } from "pages/Home/Consulting/Consulting.graphql.generated"

export type ChosenItemType = {
  id: string
  name: string
}[]

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: ChosenItemType) => void
  topCategories?: string[]
  query: GetTopCategoriesQueryHookResult
}

type CategoryType = {
  top?: string
  second?: string
}

const SubjectFilter = (props: consultProps) => {
  const [category, setCategory] = useState<CategoryType>()
  const [errorState, setErrorState] = useState(false)
  const [chosenItem, setChosenItem] = useState<ChosenItemType>([])
  const topCategories = props?.query?.data?.topCategories
  const secondCategories = topCategories?.find(el => el?.name === category?.top)?.secondCategories

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
          分類({chosenItem?.length}/3)
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
              className={cx({ [styled.category]: item === category?.top })}
              onClick={() => {
                const second =
                  topCategories?.filter(el => el?.name === item)?.[0]?.secondCategories?.[0]
                    ?.name || ""
                setCategory({
                  top: item || "",
                  second,
                })
              }}>
              {item}
            </Button>
          ))}
        </div>
        <div className={styled.content}>
          <div className={styled.part}>
            {secondCategories?.map((item, idx) => {
              return (
                <button
                  key={`secondCategories-${idx}`}
                  onClick={() => {
                    setCategory({
                      ...category,
                      second: item?.name || "",
                    })
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
            {secondCategories
              ?.filter(el => el?.name === category?.second)?.[0]
              ?.categories?.map(el => ({ id: el?.id || "", name: el?.name || "" }))
              ?.map(subject => (
                <Form.Checkbox
                  key={subject.id}
                  className={cx("checkbox", styled.item)}
                  checked={chosenItem.some(el => el.name === subject.name)}
                  value={subject.name}
                  onChange={e => {
                    if (e.target.checked && chosenItem.length === 3) {
                      e.target.checked = false
                      setErrorState(true)
                      return
                    }
                    if (e.target.checked)
                      setChosenItem([...chosenItem, { id: subject.id, name: subject.name }])
                    else {
                      setChosenItem(chosenItem.filter(el => el.id !== subject.id))
                    }
                    setErrorState(false)
                  }}>
                  {subject.name}
                </Form.Checkbox>
              ))}
          </div>
        </div>
      </div>
      <div className={styled.buttons}>
        <Button
          variant="text"
          onClick={() => {
            setChosenItem([])
            setErrorState(false)
          }}>
          清除
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.getValue(chosenItem)
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
