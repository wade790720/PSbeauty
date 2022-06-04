import styled from "./FormHorizontal.module.scss"

const FormHorizontal = (props: ReactProps.WithChildren) => {
  return <div className={styled.wrapper}>{props.children}</div>
}

export default FormHorizontal
