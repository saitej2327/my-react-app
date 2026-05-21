import { Link } from 'react-router-dom'

import {
  FaTachometerAlt,
  FaUsers,
  FaCog
} from 'react-icons/fa'

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: '250px',
        height: '100vh'
      }}
    >
      <h4 className="mb-4">AdminLTE</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link
            to="/dashboard"
            className="nav-link text-white"
          >
            <FaTachometerAlt className="me-2" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/users"
            className="nav-link text-white"
          >
            <FaUsers className="me-2" />
            Users
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            to="/settings"
            className="nav-link text-white"
          >
            <FaCog className="me-2" />
            Settings
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar