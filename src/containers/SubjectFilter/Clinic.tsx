import { useState, useEffect, useCallback } from "react"
import Drawer from "components/Drawer"
import Form from "components/Form"
import Button from "components/Button"
import styled from "./SubjectFilter.module.scss"
import { GetTopCategoriesQueryHookResult } from "pages/Doctor/Doctor.graphql.generated"
import cx from "classnames"

type ChosenItemType = {
  id?: string
  name?: string
}[]

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: ChosenItemType) => void
  topCategoriesQuery: GetTopCategoriesQueryHookResult
  defaultValue: ChosenItemType
}

type CategoryType = {
  top?: string
  second?: string
}

const SubjectFilter = (props: consultProps) => {
  const [isCheckAll, setIsCheckAll] = useState<string[]>([])
  const [category, setCategory] = useState<CategoryType>()
  const [chosenItem, setChosenItem] = useState<ChosenItemType>([])
  const topCategories = props?.topCategoriesQuery?.data?.topCategories
  const secondCategories = topCategories?.find(el => el?.name === category?.top)?.secondCategories
  const bottomCategories = secondCategories
    ?.filter(el => el?.name === category?.second)?.[0]
    ?.categories?.map(el => {
      return {
        id: el?.id || "",
        name: el?.name || "",
      }
    })
  const handleFirstItem = useCallback(() => {
    if (topCategories && topCategories?.length > 0 && !category?.top) {
      setCategory({
        top: topCategories[0]?.name || "",
        second:
          (topCategories[0]?.secondCategories && topCategories[0]?.secondCategories[0]?.name) || "",
      })
    }
  }, [topCategories])

  useEffect(() => {
    handleFirstItem()
  }, [handleFirstItem])

  useEffect(() => {
    if (props.defaultValue.length === 0) setIsCheckAll([])

    setChosenItem(
      props.defaultValue?.map(el => ({
        id: el.id,
        name: el.name,
      })),
    )
  }, [props.defaultValue])

  return (
    <Drawer
      open={props.open}
      onClose={() => {
        props.onClose
        handleFirstItem()
      }}
      size="100%">
      <div className={styled.wrapper}>
        <div className={styled.title}>{`分類(${chosenItem.length})`}</div>
        <div className={styled["medical-type"]}>
          {topCategories
            ?.map(el => el?.name || "")
            ?.map((item, idx) => (
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
            {bottomCategories && bottomCategories?.length > 0 && (
              <Form.Checkbox
                className={styled.item}
                checked={isCheckAll?.some(el => el === category?.second)}
                onChange={e => {
                  const categories =
                    secondCategories
                      ?.filter(el => el?.name === category?.second)?.[0]
                      ?.categories?.map(el => {
                        return {
                          id: el?.id || "",
                          name: el?.name || "",
                        }
                      }) || []
                  if (e.target.checked) {
                    setIsCheckAll([...isCheckAll, category?.second || ""])
                    setChosenItem([...chosenItem, ...categories])
                  } else {
                    isCheckAll.splice(
                      isCheckAll.findIndex(el => el === category?.top),
                      1,
                    )
                    setIsCheckAll(isCheckAll)
                    setChosenItem(chosenItem.filter(x => !categories.some(el => el?.id === x.id)))
                  }
                }}>
                全選
              </Form.Checkbox>
            )}
            {bottomCategories?.map(subject => (
              <Form.Checkbox
                key={subject?.id}
                className={styled.item}
                checked={chosenItem.some(el => el.id === subject.id)}
                value={subject?.name}
                onChange={e => {
                  if (e.target.checked) {
                    setChosenItem([...chosenItem, subject])
                    const target = secondCategories
                      ?.filter(el => el?.name === category?.second)?.[0]
                      ?.categories?.map(el => el?.name || "")

                    const intersection = [...chosenItem, subject].filter(x =>
                      target?.includes(x?.name || ""),
                    )

                    if (intersection.length === target?.length) {
                      setIsCheckAll([...isCheckAll, category?.second || ""])
                    }
                  } else {
                    setChosenItem(chosenItem.filter(el => el?.id !== subject?.id))
                    setIsCheckAll(isCheckAll.filter(el => el !== category?.second))
                  }
                }}>
                {subject?.name || ""}
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
            props.getValue(chosenItem)
            props.onClose()
            handleFirstItem()
          }}>
          完成
        </Button>
      </div>
    </Drawer>
  )
}

export default SubjectFilter
