import { useState, useEffect } from "react"
import Button from "components/Button"
import Profile from "components/Profile"
import Toolbars from "containers/Toolbars"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"
import Modal from "components/Modal"
import SubjectFilter from "components/SubjectFilter"
import { sentResetPassword } from "firebaseClient"
import styled from "./Doctor.module.scss"
import {
  useGetTopCategoriesLazyQuery,
  useUpdateClinicCategoryMutation,
  useGetMyClinicLazyQuery,
} from "./Doctor.graphql.generated"
import Loading from "components/QueryStatus/Loading"

const DEFAULT_MODAL_MSG = {
  title: "2-1寄送認證郵件",
  content: "將密碼認證信寄至註冊信箱",
  confirm: "發送",
  cancel: "取消",
}

const Doctor = () => {
  const go = useGo()
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [modalMsg, setModalMsg] = useState(DEFAULT_MODAL_MSG)
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const [loadClinic, queryClinic] = useGetMyClinicLazyQuery()
  const [updateClinicCategoryMutation] = useUpdateClinicCategoryMutation()

  useEffect(() => {
    if (!filterOpen) return
    loadQuery()
  }, [filterOpen])

  if (query.loading) return <Loading />
  return (
    <>
      <Profile />
      <div className={styled.wrapper}>
        <Button
          variant="secondary"
          onClick={() => {
            loadClinic({ fetchPolicy: "no-cache" })

            setFilterOpen(true)
          }}>
          專長項目
        </Button>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          修改密碼
        </Button>
        <Modal
          title={modalMsg.title}
          open={open}
          confirmText={modalMsg.confirm}
          cancelText={modalMsg.cancel}
          onConfirm={async () => {
            try {
              if (auth?.user?.email) {
                await sentResetPassword(auth?.user?.email)
                setModalMsg({
                  ...modalMsg,
                  title: "發送成功",
                  content: "請至註冊信箱查收新密碼",
                  confirm: "",
                  cancel: "關閉",
                })
              }
            } catch {
              setModalMsg({
                ...modalMsg,
                title: "發送失敗",
                content: "請重新發送",
                confirm: "",
                cancel: "關閉",
              })
            }

            setOpen(true)
          }}
          onCancel={() => {
            setModalMsg(DEFAULT_MODAL_MSG)
            setOpen(false)
          }}>
          {modalMsg.content}
        </Modal>
        <div />
        <Button
          variant="text"
          onClick={() => {
            auth.signOut()
            go.toHome()
          }}>
          登出
        </Button>
        <SubjectFilter
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          getValue={value => {
            updateClinicCategoryMutation({
              variables: {
                categories: value.map(el => el.id || ""),
              },
            })
          }}
          topCategoriesQuery={query}
          defaultValue={
            queryClinic?.data?.myClinic?.categories?.map(el => ({
              id: el?.id || "",
              name: el?.name || "",
            })) || []
          }
        />
      </div>
      <Toolbars.Clinic />
    </>
  )
}
export default Doctor
