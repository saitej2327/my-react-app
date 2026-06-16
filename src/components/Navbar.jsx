import { useNavigate } from 'react-router-dom'
import { clearAuthToken } from '../api/authHelpers'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearAuthToken()
    navigate('/')
  }

  return (

    <nav className="navbar navbar-dark bg-primary px-3">

      <span className="navbar-brand">

        Admin Dashboard

      </span>

      <button
        className="btn btn-light"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  )
}

export default Navbar