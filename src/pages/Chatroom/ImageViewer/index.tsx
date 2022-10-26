import cx from "classnames"
import styled from "./ImageViewer.module.scss"
// import { saveAs } from "file-saver"
import { ReactComponent as Close } from "./Close.svg"
import { ReactComponent as Download } from "./Download.svg"

export type ImageViewerProps = {
  url?: string
  clickClose: () => void
} & ReactProps.Component

const ImageViewer = ({ url, clickClose }: ImageViewerProps) => {
  return url ? (
    <div className={cx(styled.wrapper)}>
      <div
        className={cx(styled.btn, styled.left)}
        onClick={() => {
          clickClose()
        }}>
        <Close />
      </div>
      <a
        className={cx(styled.btn, styled.right)}
        href={url}
        // onClick={async () => {
        //   const res = await fetch(url)
        //   const buffer = await res.arrayBuffer()
        //   const array = url.replace(/\?.*$/, "").split("%2F")
        //   const filename = array.length > 1 ? decodeURI(array[array.length - 1]) : "圖片.jpg"
        //   saveAs(URL.createObjectURL(new Blob([buffer])), filename)
        // }}
      >
        <Download />
      </a>
      <img src={url} />
    </div>
  ) : (
    <></>
  )
}

export default ImageViewer
