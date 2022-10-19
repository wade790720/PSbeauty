import styled from "./Profile.module.scss"
import Form from "components/Form"
import Icon from "components/Icon"
import Modal from "components/Modal"
import { useGo } from "components/Router"
import { useAuth } from "hooks/useAuth"
import { useEffect, useState, useRef } from "react"
import { useGetMemberInboxLazyQuery } from "pages/Member/MemberInbox/MemberInbox.graphql.generated"
import { useUpdateUserMutation, useMeLazyQuery } from "./User.graphql.generated"
import Colors from "./colors.json"

const getBackgroundColor = () => {
  const AVATAR_COLOR = "avatar-color"
  let index = parseInt(`${localStorage.getItem(AVATAR_COLOR)}`, 10)
  if (!index) {
    index = Math.round(Math.random() * 1000)
    localStorage.setItem(AVATAR_COLOR, `${index}`)
  }
  return Colors[index % Colors.length]
}

const Profile = () => {
  const go = useGo()
  const auth = useAuth()
  const [editOpen, setEditOpen] = useState(false)
  const usernameRef = useRef<HTMLInputElement>(null)
  const [loadMemberInboxQuery, getMemberInboxQuery] = useGetMemberInboxLazyQuery()
  const [updateUser] = useUpdateUserMutation()
  const [loadMeQuery, getMeQuery] = useMeLazyQuery()
  const backgroundColor = getBackgroundColor()
  const userEmail = auth.user.email || "Unknown"
  const userName = getMeQuery.data?.me?.name || "未命名"
  const consults = getMemberInboxQuery.data?.me?.consults || []

  useEffect(() => {
    if (auth.user.id) {
      loadMemberInboxQuery()
    }
  }, [auth.user.id, loadMemberInboxQuery])

  useEffect(() => {
    if (auth.user.id) {
      loadMeQuery()
    }
  }, [])

  return (
    <div className={styled.wrapper}>
      <div className={styled.avatar} style={{ background: backgroundColor }}>
        {userEmail[0].toUpperCase()}
      </div>
      <div
        className={styled.username}
        onClick={() => {
          setEditOpen(true)
        }}>
        {!getMeQuery.loading && (
          <>
            <div>{userName}</div>
            <Icon name="Edit" />
          </>
        )}
      </div>
      <Modal
        title="請輸入暱稱"
        open={editOpen}
        confirmText="確定"
        cancelText="取消"
        bodyClassName={styled["modal-body"]}
        onConfirm={() => {
          updateUser({
            variables: {
              name: `${usernameRef.current?.value || ""}`,
            },
          }).then(() => {
            loadMeQuery({ fetchPolicy: "no-cache" })
          })
        }}
        onClose={() => setEditOpen(false)}>
        <Form.Input
          ref={usernameRef}
          type="text"
          variant="gray"
          placeholder="暱稱"
          defaultValue={getMeQuery.data?.me?.name || ""}
        />
      </Modal>

      {!auth.user.clinic && (
        <div
          className={styled.chat}
          onClick={() => {
            auth.user.clinic ? go.toDoctorInbox() : go.toMemberInbox()
          }}>
          <Icon name="Chat" />
          {consults.length > 1 &&
            consults?.map(consult => consult?.userInboxes?.some(el => !el?.read)) && (
              <div className={styled["chat-unread"]} />
            )}
        </div>
      )}
    </div>
  )
}
export default Profile
