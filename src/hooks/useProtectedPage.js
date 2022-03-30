import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { irFeed } from '../routes/cordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      irFeed(navigate)
    }
  }, [navigate]);
}

export default useProtectedPage;
