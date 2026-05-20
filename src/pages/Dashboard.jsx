import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <div>

      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="p-4 w-100">
          <h1>Dashboard 🚀</h1>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card shadow p-3">
                <h5>Total Users</h5>
                <h2>120</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow p-3">
                <h5>Revenue</h5>
                <h2>$15K</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow p-3">
                <h5>Orders</h5>
                <h2>320</h2>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard