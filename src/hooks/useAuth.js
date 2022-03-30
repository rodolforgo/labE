import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { irFeed } from  "../routes/cordinator"

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      irFeed(navigate);
    }
  }, [navigate])
}

export default useAuth;
