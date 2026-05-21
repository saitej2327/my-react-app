import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'Jan',
    users: 5
  },
  {
    name: 'Feb',
    users: 10
  },
  {
    name: 'Mar',
    users: 20
  },
  {
    name: 'Apr',
    users: 30
  },
  {
    name: 'May',
    users: 40
  },
  {
    name: 'June',
    users: 50
  },
  {
    name: 'July',
    users: 60
  },
  {
    name: 'Aug',
    users: 70
  },
  {
    name: 'Sep',
    users: 80
  },
  {
    name: 'Oct',
    users: 90
  },
  {
    name: 'Nov',
    users: 100
  },
  {
    name: 'Dec',
    users: 110
  }
]

function Dashboard() {
  return (
    <div>

      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div
          className="p-4 w-100"
          style={{ backgroundColor: '#f4f6f9' }}
        >

          <h2 className="mb-4">
            Dashboard Overview 🚀
          </h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-3">
                <h5>Total Users</h5>
                <h2>1,250</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-3">
                <h5>Revenue</h5>
                <h2>$24,000</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 p-3">
                <h5>Orders</h5>
                <h2>530</h2>
              </div>
            </div>

          </div>

          <div className="card shadow border-0 p-4 mt-3">

            <h4 className="mb-4">
              Monthly Users Growth
            </h4>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" />
              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard