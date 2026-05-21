import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

  // GET TOKEN
  const token =
    localStorage.getItem('token')

  // IF NO TOKEN
  if (!token) {

    return <Navigate to="/" />
  }

  // ACCESS GRANTED
  return children
}

export default ProtectedRoute