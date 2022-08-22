import Drawer from "components/Drawer"
import Form, { InputGroup, Append } from "components/Form"
import Dropdown from "components/Dropdown"
import Button from "components/Button"
import { useState, useEffect } from "react"
import styled from "./Consulting.module.scss"
import Icon from "components/Icon"
import SubjectFilter from "containers/SubjectFilter"
import Modal from "components/Modal"
import { storage } from "firebaseClient"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import uuid from "utils/uuid"
import {
  useGetTopCategoriesLazyQuery,
  useGetConsultClinicMutation,
} from "./Consulting.graphql.generated"
import { ChosenItemType } from "containers/SubjectFilter/Member"

type consultProps = {
  open: boolean
  onClose: (target?: {
    subject: string
    categories: string | null[]
    days: number
    content: string
    images: string[]
  }) => void
}

const DAYS = [
  {
    name: "一天",
    value: 1,
  },
  {
    name: "二天",
    value: 2,
  },
  {
    name: "三天",
    value: 3,
  },
]

const DEFAULT_MODAL_MSG = {
  title: "送出錯誤",
  content: "需填寫必填欄位",
  cancel: "取消",
}

const createFile = (raw: File | null = null, url = "") => ({ raw, url })

const Consulting = (props: consultProps) => {
  const [subject, setSubject] = useState("")
  const [categories, setCategories] = useState<ChosenItemType>([])
  const [chosenCycle, setChosenCycle] = useState<number | "">("")
  const [content, setContent] = useState("")
  const [modalMsg, setModalMsg] = useState(DEFAULT_MODAL_MSG)
  const [open, setOpen] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [files, setFiles] = useState<{ raw: File | null; url: string }[]>([
    createFile(),
    createFile(),
    createFile(),
  ])
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const [getConsultClinicMutation] = useGetConsultClinicMutation({})

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  const handleInit = () => {
    props.onClose()
    setSubject("")
    setCategories([])
    setChosenCycle("")
    setFiles([createFile(), createFile(), createFile()])
  }

  return (
    <Drawer open={props.open} onClose={() => props.onClose()} size="100%">
      <div className={styled.wrapper}>
        <h1>諮詢內容</h1>
        <Form className={styled.form}>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>標題</Form.Label>
            <Form.Input
              placeholder="請輸入文字"
              maxLength={20}
              className={styled.input}
              onChange={e => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>分類</Form.Label>
            <div onClick={() => setOpen(true)} style={{ width: "100%" }}>
              <InputGroup className={styled.classify}>
                <Form.Input
                  value={categories.map(el => el.name).toString()}
                  placeholder="請點擊選擇"
                  className={styled.input}
                />
                <Append>
                  <Icon name="caretDown" />
                </Append>
              </InputGroup>
            </div>
            <SubjectFilter.Member
              open={open}
              onClose={() => setOpen(false)}
              getValue={value => setCategories(value)}
              topCategories={query?.data?.topCategories?.map(el => el?.name || "")}
              query={query}
            />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>諮詢週期</Form.Label>
            <Dropdown
              className={styled.dropdown}
              onSelect={(_, { eventKey }) => {
                if (typeof eventKey === "number") setChosenCycle(eventKey)
              }}>
              <Dropdown.Toggle>
                <InputGroup className={styled.classify}>
                  <Form.Input
                    value={DAYS.find(el => el.value === chosenCycle)?.name || ""}
                    placeholder="請點擊選擇"
                    className={styled.input}
                  />
                  <Append>
                    <Icon name="caretDown" />
                  </Append>
                </InputGroup>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {DAYS.map(item => (
                  <Dropdown.Item key={item?.value} eventKey={item?.value}>
                    <p>{item?.name}</p>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label>諮詢問題</Form.Label>
            <Form.Textarea
              placeholder="請輸入文字"
              className={styled.textarea}
              onChange={e => setContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label>附加檔案</Form.Label>
            <div className={styled.uploads}>
              {files.map((file, index) => {
                return (
                  <Form.Group key={`upload-image-${index}`}>
                    <label id={`pic-${index}`} className={styled.upload}>
                      <div className={styled.add}>+</div>
                      <input
                        id={`pic-${index}`}
                        type="file"
                        accept="image/*"
                        onChange={e => {
                          if (e.target.files && e.target.files.length) {
                            const tempFile = createFile(
                              e.target.files[0],
                              URL.createObjectURL(e.target.files[0]),
                            )
                            setFiles([
                              index === 0 ? tempFile : files[0],
                              index === 1 ? tempFile : files[1],
                              index === 2 ? tempFile : files[2],
                            ])
                          }
                        }}
                      />
                      {file.raw && (
                        <div className={styled.image}>
                          <img src={file.url} />
                          <div
                            className={styled.delete}
                            onClick={e => {
                              e.preventDefault()
                              const tempFile = createFile()
                              setFiles([
                                index === 0 ? tempFile : files[0],
                                index === 1 ? tempFile : files[1],
                                index === 2 ? tempFile : files[2],
                              ])
                            }}>
                            X
                          </div>
                        </div>
                      )}
                    </label>
                  </Form.Group>
                )
              })}
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className={styled.buttons}>
        <Button variant="text" onClick={handleInit}>
          取消
        </Button>
        <Button
          onClick={() => {
            const uploadImages = files.flatMap(file => {
              if (!file.raw) return []
              return {
                ref: ref(storage, `image/${uuid()}/${file.raw?.name || ""}`),
                file: file.raw,
              }
            })
            if (!subject || !categories.length || !chosenCycle) {
              setIsAlert(true)
              return
            }

            Promise.all(uploadImages.map(upload => uploadBytes(upload.ref, upload.file)))
              .then(snapshots =>
                Promise.all(snapshots.map(snapshot => getDownloadURL(snapshot.ref))),
              )
              .then(images => {
                getConsultClinicMutation({
                  variables: {
                    subject,
                    categories: categories.map(el => el.id),
                    days: Number(chosenCycle),
                    images,
                    content,
                  },
                  onCompleted: handleInit,
                })
                props.onClose()
              })
          }}>
          送出
        </Button>
        <Modal
          title={modalMsg.title}
          open={isAlert}
          cancelText={modalMsg.cancel}
          onCancel={() => {
            setIsAlert(false)
          }}>
          {modalMsg.content}
        </Modal>
      </div>
    </Drawer>
  )
}

export default Consulting
