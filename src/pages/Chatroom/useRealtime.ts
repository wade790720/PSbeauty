import { doc, onSnapshot, serverTimestamp, setDoc, Timestamp } from "firebase/firestore"
import { useEffect, useMemo, useRef } from "react"
import { ConsultTopicReply } from "types/schema"
import { firestore } from "../../firebaseClient"

type RealTimeMessage = Pick<ConsultTopicReply, "content" | "userId" | "contentType"> & {
  timestamp: Timestamp | ReturnType<typeof serverTimestamp>
  timestampMillis?: number
}

type useRealtimeProps = {
  chatroomId: string
  onMessage: (msg: RealTimeMessage) => void
}

const useRealtime = ({ chatroomId, onMessage }: useRealtimeProps) => {
  if (!chatroomId) {
    throw new Error("必需要提供 chatroomId。")
  }

  const connected = useRef<boolean>(false)
  const chatroomRef = useMemo(() => {
    return doc(firestore, "chatroom", chatroomId)
  }, [chatroomId])

  useEffect(() => {
    return onSnapshot(chatroomRef, doc => {
      if (doc.exists()) {
        const msg = doc.data() as RealTimeMessage

        if (connected.current) {
          if (!msg.timestamp) {
            return
          }

          const { seconds, nanoseconds } = msg.timestamp as Timestamp
          onMessage({ ...msg, timestampMillis: new Timestamp(seconds, nanoseconds).toMillis() })
        } else {
          connected.current = true
        }
      } else {
        connected.current = true
      }
    })
  }, [chatroomId])

  return async (
    msg: Pick<RealTimeMessage, "content" | "userId" | "contentType"> & { consultedId?: string },
  ) => {
    if (msg.consultedId) {
      const inboxRef = doc(firestore, "inbox", msg.consultedId)
      await setDoc(inboxRef, {
        content: msg.content,
        timestamp: serverTimestamp(),
      })

      window.ReactNativeWebView?.postMessage(
        JSON.stringify({
          cmd: "push",
          id: msg.consultedId,
          title: null,
          body: msg.contentType === "image" ? "您收到了一張圖片" : msg.content,
        }),
      )
    }

    return setDoc(chatroomRef, {
      content: msg.content,
      userId: msg.userId,
      timestamp: serverTimestamp(),
      contentType: msg.contentType,
    } as RealTimeMessage)
  }
}

export default useRealtime
