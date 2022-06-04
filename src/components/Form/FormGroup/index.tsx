import React, { useState, useContext } from "react"
import FormLabel from "../FormLabel"
import FormContext, { FormGroupContext, FormGroupAttributes } from "components/Form/FormContext"
import uuid from "utils/uuid"
import styled from "./FormGroup.module.scss"
import cx from "classnames"

export type FormGroupProps = ReactProps.Component &
  Partial<{
    /**
     * A unique identifier for the form group
     */
    formId: string
    label: JSX.Element
    /**
     * Specify the type of the
     */
    layout: "horizontal" | "vertical"
    /**
     * Allows the form group to grow to the custom width
     */
    labelWidth: number
  }>

const FormGroup = (props: FormGroupProps) => {
  const [attributes, setAttributes] = useState<FormGroupAttributes>({
    formId: props.formId || uuid(),
    entered: false,
    disabled: false,
    readOnly: false,
  })
  const { attributes: formAttributes } = useContext(FormContext)
  const layout = props.layout || formAttributes?.layout || "horizontal"
  const labelWidth = props.labelWidth || formAttributes?.labelWidth || "auto"
  const update = (attributes: FormGroupAttributes) => {
    setAttributes(prev => {
      return { ...prev, ...attributes }
    })
  }

  let label: React.ReactElement | null = null
  const children: React.ReactElement[] = []
  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    if (child.type === FormLabel) {
      label = React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          width: `${labelWidth}px`,
        },
      })
    } else {
      children.push(React.cloneElement(child, { key: index }))
    }
  })

  return (
    <FormGroupContext.Provider value={{ attributes, setAttributes: update }}>
      <div className={cx(styled.wrapper, styled[layout], props.className)}>
        {label}
        <div className={styled.group}>{children}</div>
      </div>
    </FormGroupContext.Provider>
  )
}

export default FormGroup
