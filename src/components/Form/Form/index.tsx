import React, { useState } from "react"
import FormContext, { FormAttributes } from "../FormContext"

export type FormProps = JSX.IntrinsicElements["form"] & FormAttributes

const Form = ({ layout, labelWidth, ...props }: FormProps) => {
  const [attributes, setAttributes] = useState<FormAttributes>({
    layout: layout,
    labelWidth: labelWidth,
  })

  const update = (attributes: FormAttributes) => {
    setAttributes(prev => {
      return { ...prev, ...attributes }
    })
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit && props.onSubmit(e)
  }

  return (
    <FormContext.Provider value={{ attributes, setAttributes: update }}>
      <form {...props} onSubmit={submit}>
        {props.children}
      </form>
    </FormContext.Provider>
  )
}

export default Form
