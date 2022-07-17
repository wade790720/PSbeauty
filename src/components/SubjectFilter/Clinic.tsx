import { useState, useEffect } from "react"
import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import styled from "./SubjectFilter.module.scss"
import { GetTopCategoriesQueryHookResult } from "pages/Doctor/Doctor.graphql.generated"
import cx from "classnames"

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: string) => void
  topCategories?: string[]
  query: GetTopCategoriesQueryHookResult
}

type CategoryType = {
  top?: string
  second?: string
}

const SubjectFilter = (props: consultProps) => {
  const [isCheckAll, setIsCheckAll] = useState<string[]>([])
  const [category, setCategory] = useState<CategoryType>()
  const [chosenItem, setChosenItem] = useState<string[]>([])
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
        <div className={styled.title}>{`分類(${chosenItem.length})`}</div>
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
              {`${item}(${
                topCategories?.filter(el => el?.name === item)?.[0]?.secondCategories?.length || 0
              })`}
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
                  {`${item?.name}(${item?.categories?.length || "0"})` || ""}
                </button>
              )
            })}
          </div>
          <div className={styled.subjects}>
            <Form.Checkbox
              className={styled.item}
              checked={isCheckAll?.some(el => el === category?.second)}
              onChange={e => {
                const categories =
                  secondCategories
                    ?.filter(el => el?.name === category?.second)?.[0]
                    ?.categories?.map(el => el?.name || "") || []
                if (e.target.checked) {
                  setIsCheckAll([...isCheckAll, category?.second || ""])
                  setChosenItem([...chosenItem, ...categories])
                } else {
                  isCheckAll.splice(
                    isCheckAll.findIndex(el => el === category?.top),
                    1,
                  )
                  setIsCheckAll(isCheckAll)
                  setChosenItem(chosenItem.filter(x => !categories.includes(x)))
                }
              }}>
              全選
            </Form.Checkbox>
            {secondCategories
              ?.filter(el => el?.name === category?.second)?.[0]
              ?.categories?.map(el => el?.name || "")
              ?.map(subject => (
                <Form.Checkbox
                  key={subject}
                  className={styled.item}
                  checked={chosenItem.some(el => el === subject)}
                  value={subject}
                  onChange={e => {
                    if (e.target.checked) {
                      setChosenItem([...chosenItem, subject])
                      const target = secondCategories
                        ?.filter(el => el?.name === category?.second)?.[0]
                        ?.categories?.map(el => el?.name || "")

                      const intersection = [...chosenItem, subject].filter(x => target?.includes(x))

                      if (intersection.length === target?.length) {
                        setIsCheckAll([...isCheckAll, category?.second || ""])
                      }
                    } else {
                      setChosenItem(chosenItem.filter(el => el !== subject))
                      setIsCheckAll(isCheckAll.filter(el => el !== category?.second))
                    }
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
            setChosenItem([])
            setIsCheckAll([])
          }}>
          清除
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.getValue(chosenItem.toString())
            props.onClose()
          }}>
          完成
        </Button>
      </div>
    </Drawer>
  )
}

export default SubjectFilter
