import React from "react"

export type FormAttributes = Partial<{
  layout: "horizontal" | "vertical"
  labelWidth: number
}>

export type FormContextProps = {
  attributes?: FormAttributes
  setAttributes: (attributes: FormAttributes) => void
}

const FormContext = React.createContext<FormContextProps>({
  setAttributes: () => {
    // set attributes
  },
})

export type FormGroupAttributes = Partial<{
  formId: string
  entered: boolean
  disabled: boolean
  readOnly: boolean
  variant: "invalid" | "solid"
}>

export type FormGroupContextProps = {
  attributes?: FormGroupAttributes
  setAttributes: (attributes: FormGroupAttributes) => void
}

const FormGroupContext = React.createContext<FormGroupContextProps>({
  setAttributes: () => {
    // set attributes
  },
})

export { FormGroupContext }
export default FormContext
