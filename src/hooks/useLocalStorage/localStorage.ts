import localforage from "localforage"

export type LocalStorageKey = "customToken" | "firebaseToken" | "refreshToken" | "email"
export type LocalStorageValue = string | number | boolean

const cache: {
  customToken?: string | null
  firebaseToken?: string | null
  refreshToken?: string | null
  email?: string | null
} = {}

export async function init() {
  for (const key of ["customToken", "firebaseToken", "refreshToken", "email"]) {
    const value: string | null = await localforage.getItem(key)
    if (
      key === "customToken" ||
      key === "firebaseToken" ||
      key === "refreshToken" ||
      key === "email"
    ) {
      cache[key] = value || null
    }
  }
}

export function getStorageValue(key: LocalStorageKey, defaultValue: LocalStorageValue) {
  if (typeof window !== "undefined") {
    const saved = cache[key] || null
    return saved !== null ? JSON.parse(saved) : defaultValue
  }
}

export function setStorageValue(key: LocalStorageKey, value: LocalStorageValue) {
  if (typeof window !== "undefined") {
    cache[key] = JSON.stringify(value)
    localforage.setItem(key, JSON.stringify(value))
  }
}

export function removeStorageValue(key: LocalStorageKey) {
  if (typeof window !== "undefined") {
    delete cache[key]
    localforage.removeItem(key)
  }
}
