import FormBase from "./Form"

import FormLabel from "./FormLabel"

import FormInput from "./FormInput"

import FormTextarea from "./FormTextarea"

import FormCheckbox from "./FormCheckbox"

import FormRadio from "./FormRadio"

import { FormHelperMessage, FormValidMessage, FormErrorMessage } from "./FormMessage"

import FormGroup from "./FormGroup"

import FormFieldset from "./FormFieldset"

import FormDivider from "./FormDivider"
import FormHorizontal from "./FormHorizontal"

import InputGroup, { Prepend, Append } from "./InputGroup"
export type { FormProps } from "./Form"
export type { FormLabelProps } from "./FormLabel"
export type { FormInputProps } from "./FormInput"
export type { FormTextareaProps } from "./FormTextarea"
export type { FormCheckboxProps } from "./FormCheckbox"
export type { FormRadioProps } from "./FormRadio"
export type { FormMessageProps } from "./FormMessage"
export type { FormGroupProps } from "./FormGroup"
export type { FormFieldsetProps } from "./FormFieldset"
export type { InputGroupProps, PrependProps, AppendProps } from "./InputGroup"

const Form = Object.assign(FormBase, {
  Label: FormLabel,
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  Radio: FormRadio,
  HelperMessage: FormHelperMessage,
  ValidMessage: FormValidMessage,
  ErrorMessage: FormErrorMessage,
  Group: FormGroup,
  Fieldset: FormFieldset,
  Divider: FormDivider,
  Horizontal: FormHorizontal,
})

export { InputGroup, Prepend, Append }
export default Form
