import {
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore"
import { useEffect, useMemo, useRef } from "react"
import { ConsultTopicReply } from "types/schema"
import { app } from "./testFirebase"

type RealTimeMessage = Pick<ConsultTopicReply, "content" | "userId"> & {
  timestamp: Timestamp | ReturnType<typeof serverTimestamp>
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
  const firestore = getFirestore(app)
  const chatroomRef = useMemo(() => {
    return doc(firestore, "chatroom", chatroomId)
  }, [chatroomId])

  useEffect(() => {
    return onSnapshot(chatroomRef, doc => {
      if (doc.exists()) {
        const msg = doc.data() as RealTimeMessage

        if (connected.current) {
          onMessage(msg)
        } else {
          connected.current = true
        }
      } else {
        connected.current = true
      }
    })
  }, [chatroomId])

  return (msg: Pick<RealTimeMessage, "content" | "userId">) => {
    return setDoc(chatroomRef, {
      content: msg.content,
      userId: msg.userId,
      timestamp: serverTimestamp(),
    } as RealTimeMessage)
  }
}

export default useRealtime
