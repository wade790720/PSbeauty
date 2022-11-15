import React, { useState } from "react"
import Drawer from "components/Drawer"
import styled from "./SubjectFilter.module.scss"
import cx from "classnames"
import Icon from "components/Icon"
import { ReactComponent as CheckIcon } from "./check.svg"
import { GetTopCategoriesQueryHookResult } from "pages/Home/Consulting/Consulting.graphql.generated"

export type ChosenItemType = {
  id: string
  name: string
}[]

export type ConsultProps = {
  open: boolean
  onClose: () => void
  getValue: (value: ChosenItemType) => void
  topCategories?: string[]
  query: GetTopCategoriesQueryHookResult
}

const SubjectFilter = (props: ConsultProps) => {
  const [level, setLevel] = useState<number>(1)
  const [category, setCategory] = useState<string>("")
  const [secondary, setSecondary] = useState<string[]>([])
  const [errorState, setErrorState] = useState(false)
  const [chosenItem, setChosenItem] = useState<ChosenItemType>([])
  const topCategories = props?.query?.data?.topCategories
  const secondCategories = topCategories?.find(el => el?.name === category)?.secondCategories

  return (
    <Drawer open={props.open} onClose={props.onClose} size="100%">
      <div className={styled.wrapper}>
        <div className={styled.header}>
          {level === 1 && (
            <div
              className={styled.close}
              onClick={() => {
                props.getValue([])
                props.onClose()
                setLevel(1)
                setErrorState(false)
                setSecondary([])
                setChosenItem([])
              }}>
              <Icon name="Close" />
            </div>
          )}
          {level === 2 && (
            <div
              className={styled.back}
              onClick={() => {
                setLevel(1)
              }}>
              <Icon name="CaretDown" />
            </div>
          )}
          <div className={styled.title}>
            分類 ({chosenItem?.length}/3)
            {errorState && (
              <div className={styled.error}>
                <Icon name="info" />
                <p>最多選擇3項</p>
              </div>
            )}
          </div>
          <div
            className={styled.finish}
            onClick={() => {
              props.getValue(chosenItem)
              props.onClose()
              setLevel(1)
              setErrorState(false)
            }}>
            完成
          </div>
        </div>
        {level === 1 && (
          <div className={styled.content}>
            {props.topCategories?.map(
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
                          ?.filter(el => chosenItem.map(el => el.id).includes(el?.id || "")).length
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
                {secondary.includes(item?.name || "") &&
                  item?.categories
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
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default SubjectFilter
