import { useNavigate } from "react-router-dom"

type toTarget = {
  /** 首頁 */
  toHome: () => void
}

const useGo = (): toTarget => {
  const navigate = useNavigate()
  return {
    toHome: () => navigate("/"),
  }
}

export default useGo
