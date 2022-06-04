import FormMessage, { FormMessageProps as OriginFormMessageProps } from "./FormMessage"

export type FormMessageProps = Omit<OriginFormMessageProps, "variant">
const FormHelperMessage = (props: FormMessageProps) => <FormMessage variant="helper" {...props} />
const FormValidMessage = (props: FormMessageProps) => <FormMessage variant="valid" {...props} />
const FormErrorMessage = (props: FormMessageProps) => <FormMessage variant="error" {...props} />

export default FormMessage
export { FormHelperMessage, FormValidMessage, FormErrorMessage }
