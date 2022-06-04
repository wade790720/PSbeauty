import Backdrop from "components/Layout/Backdrop"
import Header from "components/Layout/Header"
import Form from "components/Form"

const ForgotPassword = () => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* <Header />
      <Backdrop /> */}
      <Form>
        <Form.Input type="text" />
      </Form>
    </div>
  )
}
export default ForgotPassword
