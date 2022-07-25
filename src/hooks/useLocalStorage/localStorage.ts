export type LocalStorageKey = "token" | "email"
export type LocalStorageValue = string | number | boolean

export function getStorageValue(key: LocalStorageKey, defaultValue: LocalStorageValue) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key)
    return saved !== null ? JSON.parse(saved) : defaultValue
  }
}

export function setStorageValue(key: LocalStorageKey, value: LocalStorageValue) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export function removeStorageValue(key: LocalStorageKey) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key)
  }
}
