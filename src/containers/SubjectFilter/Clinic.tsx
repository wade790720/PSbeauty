import React, { useState, useEffect } from "react"
import Drawer from "components/Drawer"
import styled from "./SubjectFilter.module.scss"
import cx from "classnames"
import Icon from "components/Icon"
import { ReactComponent as CheckIcon } from "./check.svg"
import { GetTopCategoriesQueryHookResult } from "pages/Doctor/Doctor.graphql.generated"

type ChosenItemType = {
  id?: string
  name?: string
}[]

type consultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: ChosenItemType) => void
  topCategoriesQuery: GetTopCategoriesQueryHookResult
  defaultValue?: ChosenItemType
  disableClose?: boolean
}

const SubjectFilter = (props: consultProps) => {
  const [level, setLevel] = useState<number>(1)
  const [category, setCategory] = useState<string>("")
  const [secondary, setSecondary] = useState<string[]>([])
  const [chosenItem, setChosenItem] = useState<ChosenItemType>([])
  const topCategories = props?.topCategoriesQuery?.data?.topCategories
  const secondCategories = topCategories?.find(el => el?.name === category)?.secondCategories

  useEffect(() => {
    setChosenItem(
      props.defaultValue?.map(el => ({
        id: el.id,
        name: el.name,
      })) || [],
    )
  }, [props.defaultValue])

  return (
    <Drawer open={props.open} onClose={props.onClose} size="100%">
      <div className={styled.wrapper}>
        <div className={styled.header}>
          {level === 1 &&
            (!props.disableClose ? (
              <div
                className={styled.close}
                onClick={() => {
                  props.onClose()
                  setLevel(1)
                  setSecondary([])
                  setChosenItem([])
                }}>
                <Icon name="Close" />
              </div>
            ) : (
              <div />
            ))}
          {level === 2 && (
            <div
              className={styled.back}
              onClick={() => {
                setLevel(1)
              }}>
              <Icon name="CaretDown" />
            </div>
          )}
          <div className={styled.title}>分類 ({chosenItem?.length})</div>
          <div
            className={styled.finish}
            onClick={() => {
              props.getValue(chosenItem)
              props.onClose()
              setLevel(1)
            }}>
            完成
          </div>
        </div>
        {level === 1 && (
          <div className={styled.content}>
            {topCategories
              ?.map(el => el?.name || "")
              ?.map(
                item =>
                  (topCategories
                    ?.find(el => el?.name === item)
                    ?.secondCategories?.flatMap(el => el?.categories)?.length && (
                    <button
                      key={`topCategories-${item}`}
                      className={styled.row}
                      onClick={() => {
                        setCategory(item)
                        setLevel(2)
                      }}>
                      <div className={styled.title}>
                        {item} (
                        {
                          topCategories
                            ?.find(el => el?.name === item)
                            ?.secondCategories?.flatMap(el => el?.categories)
                            ?.filter(el => chosenItem.map(el => el.id).includes(el?.id || ""))
                            .length
                        }
                        /
                        {
                          topCategories
                            ?.find(el => el?.name === item)
                            ?.secondCategories?.flatMap(el => el?.categories)?.length
                        }
                        )
                      </div>
                      <div className={styled.next}>
                        <Icon name="CaretDown" />
                      </div>
                    </button>
                  )) || <React.Fragment key={`topCategories-${item}`} />,
              )}
          </div>
        )}
        {level === 2 && (
          <div className={styled.content}>
            {secondCategories?.map(item => (
              <React.Fragment key={`secondCategories-${item?.name}`}>
                <button
                  key={`secondCategories-${item?.name}`}
                  className={styled.row}
                  onClick={() => {
                    if (item?.name && item?.categories?.length) {
                      if (secondary.includes(item.name)) {
                        setSecondary(secondary.filter(row => row !== item.name))
                      } else {
                        setSecondary([...secondary, item?.name])
                      }
                    }
                  }}>
                  <div className={styled.title}>
                    {item?.name || ""} (
                    {
                      item?.categories?.filter(el =>
                        chosenItem.map(el => el.id).includes(el?.id || ""),
                      ).length
                    }
                    /{item?.categories?.length})
                  </div>
                  {(item?.categories?.length && (
                    <div
                      className={cx([
                        styled.collapse,
                        secondary.includes(item?.name || "") && styled.open,
                      ])}>
                      <Icon name="CaretDown" />
                    </div>
                  )) || <React.Fragment />}
                </button>
                {secondary.includes(item?.name || "") && (
                  <>
                    <label
                      key={`all-${item?.name}`}
                      className={cx([styled.row, styled.subject])}
                      htmlFor={`all-${item?.name}`}>
                      <input
                        type="checkbox"
                        id={`all-${item?.name}`}
                        checked={item?.categories?.every(
                          el => el?.id && chosenItem.find(choose => choose?.id === el?.id),
                        )}
                        onChange={e => {
                          if (e.target.checked) {
                            const adds =
                              item?.categories
                                ?.filter(el => !chosenItem.find(choose => choose?.id === el?.id))
                                .map(el => ({ id: el?.id || "", name: el?.name || "" })) || []
                            setChosenItem([...chosenItem, ...adds])
                          } else {
                            setChosenItem(
                              chosenItem.filter(
                                choose => !item?.categories?.find(el => el?.id === choose?.id),
                              ),
                            )
                          }
                        }}
                      />
                      <CheckIcon
                        className={cx([
                          styled.checkbox,
                          item?.categories?.every(
                            el => el?.id && chosenItem.find(choose => choose?.id === el?.id),
                          ) && styled.check,
                        ])}
                      />
                      <div className={styled.title}>全選</div>
                    </label>
                    {item?.categories
                      ?.map(el => ({ id: el?.id || "", name: el?.name || "" }))
                      ?.map(subject => (
                        <label
                          key={subject.id}
                          className={cx([styled.row, styled.subject])}
                          htmlFor={subject.id}>
                          <input
                            type="checkbox"
                            id={subject.id}
                            checked={chosenItem.some(el => el.id === subject.id)}
                            onChange={e => {
                              if (e.target.checked)
                                setChosenItem([
                                  ...chosenItem,
                                  { id: subject.id, name: subject.name },
                                ])
                              else {
                                setChosenItem(chosenItem.filter(el => el.id !== subject.id))
                              }
                            }}
                          />
                          <CheckIcon
                            className={cx([
                              styled.checkbox,
                              chosenItem.some(el => el.id === subject.id) && styled.check,
                            ])}
                          />
                          <div className={styled.title}>{subject.name}</div>
                        </label>
                      ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default SubjectFilter
