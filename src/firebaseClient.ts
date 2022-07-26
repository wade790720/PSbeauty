import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth"
import { getMessaging, getToken } from "firebase/messaging"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAzu4iFHYHhXrXByuCU25u7kpgW6b49WEA",
  authDomain: "inspiring-grove-348006.firebaseapp.com",
  projectId: "inspiring-grove-348006",
  storageBucket: "inspiring-grove-348006.appspot.com",
  messagingSenderId: "776282504981",
  appId: "1:776282504981:web:b845a75ff414fcfbbef31c",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// This browser doesn't support the API's required to use the Firebase SDK.
const messaging = getMessaging(app)

export const getClientToken = () => {
  return getToken(messaging)
}

export const register = async (email: string, password: string) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password)
  await sendEmailVerification(userCred.user)
  const idToken = await userCred.user.getIdToken(true)
  return idToken
}

export const sentResetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email)
}

export const signOut = async () => {
  auth.signOut()
}
