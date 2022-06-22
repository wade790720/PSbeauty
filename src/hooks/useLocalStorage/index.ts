import { useState, useEffect } from "react"
import {
  getStorageValue,
  setStorageValue,
  removeStorageValue,
  LocalStorageKey,
  LocalStorageValue,
} from "./localStorage"

const useLocalStorage = (key: LocalStorageKey, defaultValue: LocalStorageValue) => {
  const [value, setValue] = useState<string | null>(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    if (value !== null) {
      setStorageValue(key, value)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
export { getStorageValue, setStorageValue, removeStorageValue }
export type { LocalStorageKey, LocalStorageValue }
