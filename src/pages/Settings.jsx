import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Settings() {
  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="p-4">
          <h1>Settings Page</h1>
        </div>
      </div>
    </div>
  )
}

export default Settings