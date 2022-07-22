import Drawer from "components/Drawer"
import Form, { InputGroup, Append } from "components/Form"
import Button from "components/Button"
import { useState, useEffect } from "react"
import styled from "./Consulting.module.scss"
import Icon from "components/Icon"
import SubjectFilter from "components/SubjectFilter"
import { useGetTopCategoriesLazyQuery } from "./Consulting.graphql.generated"

type consultProps = {
  open: boolean
  onClose: (result: string) => void
}

const Consulting = (props: consultProps) => {
  const [chosenSubject, setChosenSubject] = useState("")
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState({
    file1: "",
    file2: "",
    file3: "",
  })
  const [loadQuery, query] = useGetTopCategoriesLazyQuery()

  useEffect(() => {
    if (!open) return
    loadQuery()
  }, [open])

  const getChosenSubject = (value: string) => {
    setChosenSubject(value)
  }

  return (
    <Drawer open={props.open} onClose={() => props.onClose("")} size="100%">
      <div className={styled.wrapper}>
        <h1>諮詢內容</h1>
        <Form className={styled.form}>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>標題</Form.Label>
            <Form.Input placeholder="請輸入文字" className={styled.input} />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>分類</Form.Label>
            <div onClick={() => setOpen(true)} style={{ width: "100%" }}>
              <InputGroup className={styled.classify}>
                <Form.Input
                  value={chosenSubject}
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
              getValue={value => getChosenSubject(value)}
              topCategories={query?.data?.topCategories?.map(el => el?.name || "")}
              query={query}
            />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label required>諮詢週期</Form.Label>
            <Form.Input placeholder="請輸入文字" className={styled.input} />
          </Form.Group>
          <Form.Group layout="vertical" className={styled["input-group"]}>
            <Form.Label>諮詢問題</Form.Label>
            <Form.Textarea placeholder="請輸入文字" className={styled.textarea} />
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
            props.onClose(chosenSubject)
            setChosenSubject("")
          }}>
          取消
        </Button>
        <Button
          onClick={() => {
            props.onClose(chosenSubject)
          }}>
          送出
        </Button>
      </div>
    </Drawer>
  )
}

export default Consulting
