const state: { [key: string]: { scrollY: number } } = {}

export const saveState = (component: string, object: { scrollY: number }) => {
  state[component] = object
}

export const getState = (component: string) => {
  return state[component]
}
