import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { clearAuthToken, getAuthToken } from '../api/authHelpers'
import { getCurrentUser } from '../api/authService'

function ProtectedRoute({ children }) {

  const [loading, setLoading] = useState(true)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const token = getAuthToken()

    if (!token) {
      setLoading(false)
      setIsValid(false)
      return
    }

    const verifyToken = async () => {
      try {
        await getCurrentUser()
        setIsValid(true)
      } catch (error) {
        clearAuthToken()
        setIsValid(false)
      } finally {
        setLoading(false)
      }
    }

    verifyToken()
  }, [])

  if (loading) {
    return <div className="text-center mt-5">Verifying session...</div>
  }

  if (!isValid) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute