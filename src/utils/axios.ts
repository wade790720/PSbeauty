import axios from "axios"

const instance = axios.create({
  // TODO: Need to filled the PS beauty url.
  baseURL: "",
  paramsSerializer(params) {
    const searchParams = new URLSearchParams()
    for (const key of Object.keys(params)) {
      const param = params[key]
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p)
        }
      } else {
        searchParams.append(key, param)
      }
    }
    return searchParams.toString()
  },
})
export default instance
