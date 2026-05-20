import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Users() {
  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="p-4">
          <h1>Users Page</h1>
        </div>
      </div>
    </div>
  )
}

export default Users