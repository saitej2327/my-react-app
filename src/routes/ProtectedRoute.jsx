import { Navigate } from 'react-router-dom'
import { getAuthToken } from '../api/authHelpers'

function ProtectedRoute({ children }) {

  // GET TOKEN
  const token = getAuthToken()

  // IF NO TOKEN
  if (!token) {

    return <Navigate to="/" />
  }

  // ACCESS GRANTED
  return children
}

export default ProtectedRoute