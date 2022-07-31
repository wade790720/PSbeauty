import Drawer from "components/Drawer"
import Form, { InputGroup, Append } from "components/Form"
import Dropdown from "components/Dropdown"
import Button from "components/Button"
import { useState, useEffect } from "react"
import { useAuth } from "hooks/useAuth"
import styled from "./Consulting.module.scss"
import Icon from "components/Icon"
import SubjectFilter from "components/SubjectFilter"
import Modal from "components/Modal"
import {
  useGetTopCategoriesLazyQuery,
  useGetConsultClinicMutation,
} from "./Consulting.graphql.generated"

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

const Consulting = (props: consultProps) => {
  const auth = useAuth()
  const [subject, setSubject] = useState("")
  const [categories, setCategoies] = useState("")
  const [chosenCycle, setChosenCycle] = useState<number>()
  const [content, setContent] = useState("")
  const [modalMsg, setModalMsg] = useState(DEFAULT_MODAL_MSG)
  const [open, setOpen] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [file, setFile] = useState({
    file1: "",
    file2: "",
    file3: "",
  })
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()
  const [getConsultClinicMutation] = useGetConsultClinicMutation({})

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  const getCategories = (value: string) => {
    setCategoies(value)
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
              className={styled.input}
              onChange={e => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>分類</Form.Label>
            <div onClick={() => setOpen(true)} style={{ width: "100%" }}>
              <InputGroup className={styled.classify}>
                <Form.Input value={categories} placeholder="請點擊選擇" className={styled.input} />
                <Append>
                  <Icon name="caretDown" />
                </Append>
              </InputGroup>
            </div>
            <SubjectFilter.Member
              open={open}
              onClose={() => setOpen(false)}
              getValue={value => getCategories(value)}
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
                    value={DAYS.find(el => el.value === chosenCycle)?.name}
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
            <Form.Label required>附加檔案</Form.Label>
            <div className={styled.uploads}>
              <Form.Group>
                <label id="pic-1" className={styled.upload}>
                  <div className={styled.add}>+</div>
                  <input
                    id="pic-1"
                    type="file"
                    accept="image/*"
                    onChange={e =>
                      e.target.files &&
                      setFile({ ...file, file1: URL.createObjectURL(e.target.files[0]) })
                    }
                  />
                  {file.file1 && (
                    <div className={styled.image}>
                      <img src={file.file1} />
                      <div
                        className={styled.delete}
                        onClick={e => {
                          e.preventDefault()
                          setFile(prev => {
                            return { file1: prev.file2 || "", file2: prev.file3 || "", file3: "" }
                          })
                        }}>
                        X
                      </div>
                    </div>
                  )}
                </label>
              </Form.Group>
              <Form.Group>
                <label id="pic-2" className={styled.upload}>
                  <div className={styled.add}>+</div>
                  <input
                    id="pic-2"
                    type="file"
                    accept="image/*"
                    onChange={e =>
                      e.target.files &&
                      setFile({ ...file, file2: URL.createObjectURL(e.target.files[0]) })
                    }
                  />
                  {file.file2 && (
                    <div className={styled.image}>
                      <img src={file.file2} />
                      <div
                        className={styled.delete}
                        onClick={e => {
                          e.preventDefault()
                          setFile(prev => {
                            return { ...file, file2: prev.file3 || "", file3: "" }
                          })
                        }}>
                        X
                      </div>
                    </div>
                  )}{" "}
                </label>
              </Form.Group>
              <Form.Group>
                <label id="pic-3" className={styled.upload}>
                  <div className={styled.add}>+</div>
                  <input
                    id="pic-3"
                    type="file"
                    accept="image/*"
                    onChange={e =>
                      e.target.files &&
                      setFile({ ...file, file3: URL.createObjectURL(e.target.files[0]) })
                    }
                  />
                  {file.file3 && (
                    <div className={styled.image}>
                      <img src={file.file3} />
                      <div
                        className={styled.delete}
                        onClick={e => {
                          e.preventDefault()
                          setFile({ ...file, file3: "" })
                        }}>
                        X
                      </div>
                    </div>
                  )}{" "}
                </label>
              </Form.Group>
            </div>
          </Form.Group>
        </Form>
      </div>
      <div className={styled.buttons}>
        <Button
          variant="text"
          onClick={() => {
            props.onClose()
            setSubject("")
            setCategoies("")
            setChosenCycle(undefined)
            setFile({
              file1: "",
              file2: "",
              file3: "",
            })
          }}>
          取消
        </Button>
        <Button
          onClick={() => {
            if (!subject || categories.length === 0 || !chosenCycle) {
              setIsAlert(true)
              return
            }

            getConsultClinicMutation({
              variables: {
                userId: auth?.user.id,
                subject,
                categories,
                days: Number(chosenCycle),
                content,
                images: [],
                // images: [file.file1, file.file2, file.file3],
              },
            })
            // props.onClose({
            //   subject,
            //   categories,
            //   days: chosenCycle || 0,
            //   content,
            //   images: [file.file1, file.file2, file.file3],
            // })
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
